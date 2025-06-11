import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function FriendRequest({connection}: any){

    const queryClient = useQueryClient()

    //mutation to accept a request
    const {mutate: acceptConnectionRequest} = useMutation({
        mutationFn: async(requestId: number)=>{
            await axiosInstance.put(`/connections/accept/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection Request accepted")
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})
        },
        onError: (err:any)=>{
            toast.error(err.respose.data.error)
        }
    })

    //mutation to reject a request
    const {mutate: rejectConnectionRequest} = useMutation({
        mutationFn: async(requestId:any)=>{
            await axiosInstance.put(`/connections/reject/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection request rejected")
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})
        },
        onError: (err:any)=>{
            toast.error(err.respose.data.error)
        }
    })

    return <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between hover:shadow-md">
        <div className="flex items-center gap-4">
            <Link to={`/profile/${connection.sender.username}`}>
                <img src={connection.sender.profilePicture || "/avatar.png"} alt={connection.sender.name}
            className="w-16 h-16 rounded-full object-cover"/>
            </Link>
            <div>
                <Link to={`/profile/${connection.sender.username}`} className="font-semibold text-lg">
                    {connection.sender.name}
                </Link>
                <p className="text-gray-600">{connection.sender.headline}</p>
            </div>
        </div>
        <div className="space-x-2">
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            onClick={()=> acceptConnectionRequest(connection.id)}>Accept</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-red-400 cursor-pointer"
            onClick={()=> rejectConnectionRequest(connection.id)}>Reject</button>
        </div>
    </div>
}