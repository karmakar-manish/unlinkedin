import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuthUserHook } from "../../hooks/useAuthUserHook"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import { ExternalLink, Eye, MessageSquare, ThumbsUp, ThumbsUpIcon, Trash2, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import { formatDistanceToNow } from "date-fns"

export default function NotificationPage(){
    const {data: authUser} = useAuthUserHook()

    const queryClient = useQueryClient()

    //query to fetch the notifications
    const {data: notifications, isLoading: isNotificationsLoading} = useQuery({
        queryKey: ["notifications"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/notifications")
            return res.data
        }
    })


    //mutation to mark as read the notification
    const {mutate: markAsReadMutation} = useMutation({
        mutationFn: async(id: number) => {
            await axiosInstance.put(`/notifications/${id}/read`)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["notifications"]})
        }

    })

    //mutation to delete the notification
    const {mutate: deleteNotificationMutation} = useMutation({
        mutationFn: async(id: number)=>{
            await axiosInstance.put(`/notifications/${id}`)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["notifications"]})
            toast.success("Notification deleted")
        }
    })


    function renderNotificationIcon(type: any){
        switch (type){
            case "like": 
                return <ThumbsUpIcon className="text-blue-500"/>
            case "comment":
                return <MessageSquare className="text-green-500"/>
            case "connectionAccepted":
                return <UserPlus className="text-purple-500"/>
            default: 
                return null 
        }        
    }

    //function to render the notification message
    function renderNotificationContent(notification: any){
        switch(notification.type){
            case "like":
                return <span>
                    <strong>{notification.RelatedUser.name}</strong> liked your post.
                </span>

            case "comment":
                return <span>
                    <Link to={`/profile/${notification.RelatedUser.username}`} className="font-bold">{notification.RelatedUser.name}</Link>{" "}
                    commented on your post.
                </span>

            case "connectionAccepted":
                return <span>
                    <Link to={`/profile/${notification.RelatedUser.username}`} className="font-bold">{notification.RelatedUser.name}</Link>{" "} accepted your connection request.
                </span>
            default:
                return null 
        }
    }

    //function to show the related post
    function renderRelatedPost(relatedPost: any){
        if(!relatedPost) return null 

        return (
            <Link to={`/post/${relatedPost.id}`} className="mt-2 p-2 bg-gray-50 rounded-md flex items-center space-x-2 hover:bg-gray-100">
                {relatedPost.image && (
                    <img src={relatedPost.image} alt="Post preview" className="w-10 h-10 object-cover rounded"/>
                )}
                <div>
                    <p className="text-sm text-gray-600 truncate">{relatedPost.content}</p>
                </div>
                <ExternalLink size={14} className="text-gray-400"/>
            </Link>
        )
    }

    return <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-10">
        <div className="col-span-1">
            <Sidebar name={authUser.name} bannerImg={authUser.bannerImg} username={authUser.username} headline={authUser.headline} connectionLength={authUser.connections.length} profilePicture={authUser.profilePicture}/>
        </div>

        <div className="col-span-1 lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-6">Notifications</h1>

                {isNotificationsLoading ? (
                    <p>Loading notifications...</p>
                ):(
                    notifications && notifications.length > 0 ? (
                        <ul>
                            {notifications.map((notif: any) => (
                                <li key={notif.id} className={`bg-white border rounded-lg p-4 hover:shadow-md ${!notif.read ? "border-blue-500": "border-gray-300"}`}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-4">
                                            <Link to={`/profile/${notif.RelatedUser.username}`}>
                                                <img src={notif.RelatedUser.profilePicture || "/avatar.png"} alt={notif.RelatedUser.name} className="w-12 h-12 rounded-full object-cover"/>
                                            </Link>

                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1 bg-gray-100 rounded-full">
                                                        {renderNotificationIcon(notif.type)}
                                                    </div>
                                                    <p className="text-sm">{renderNotificationContent(notif)}</p>
                                                </div>
                                                <p>
                                                    {formatDistanceToNow(new Date(notif.createdAt), {
                                                        addSuffix: true
                                                    })}
                                                </p>
                                                {renderRelatedPost(notif.Post)}
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            {!notif.read && (
                                                <button className="cursor-pointer p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200" aria-label="Mark as read"
                                                onClick={() => markAsReadMutation(notif.id)}>
                                                    <Eye size={16}/>
                                                </button>
                                            )}
                                            <button className="cursor-pointer p-1 bg-blue-100 text-red-600 rounded hover:bg-red-200" aria-label="Delete notification"
                                                onClick={() => deleteNotificationMutation(notif.id)}>
                                                    <Trash2 size={16}/>
                                                </button>
                                        </div>

                                    </div>

                                </li>
                            ))}     
                        </ul>
                    ):(
                        <p>No notifications at the moment.</p>
                    )
                )}
            </div>
        </div>
    </div>
}