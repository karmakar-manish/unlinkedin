import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useAuthUserHook } from "../hooks/useAuthUserHook"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"
import { Camera, Clock, MapPin, UserCheck, UserPlus, X } from "lucide-react"
import type { User } from "../types"

interface ProfileHeaderProps {
  userData: User,
  isOwnProfile: boolean,
  onSave:  (updatedData: User) => void
}

export default function ProfileHeader({userData, isOwnProfile, onSave}: ProfileHeaderProps){

    const [isEditing, setIsEditing] = useState(false)
    const [editedData, setEditedData] = useState<User>(userData)

    //update userData on page mount
    useEffect(()=>{
        setEditedData(userData)
    }, [userData])

    const queryClient = useQueryClient()

    const {data: authUser} = useAuthUserHook()

    //to fetch the connection status of the user (Pending, Received, not_connected)
    const {data:connectionStatus, refetch: refetchConnectionStatus} = useQuery({
        queryKey: ["connectionStatus", userData.id],
        queryFn: async()=>{
            const res = await axiosInstance.get(`/connections/status/${userData.id}`)
            return res.data
        },
        enabled: !isOwnProfile  //only enable this if this is my own profile
    })

    //check if the user is connected with the authUser
    const isConnected = userData?.connections?.some((conn: any) => {
        return Number(conn.id) === Number(authUser.id)
    })

    //mutation to send Connection Request to the User
    const {mutate: sendConnectionRequest} = useMutation({
        mutationFn: async(userId: number) => await axiosInstance.post(`/connections/request/${userId}`),
        onSuccess: ()=>{
            toast.success("Connection request sent.")
            refetchConnectionStatus()    //get the user connections again
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})   //for the navbar
        },
        onError: (error:any)=>{
            toast.error(error.response.data.error || "An error occured!")
        }
    })

    //mutation to accept request
    const {mutate: acceptRequest} = useMutation({
        mutationFn: async(requestId: Number) => {
            await axiosInstance.put(`connections/accept/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection request accepted successfully!")
            refetchConnectionStatus()
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})   //for the navbar
        },
        onError: (err: any)=>{
            toast.error(err.response.data.error || "An error occured!")
        }
    })

    //mutation to reject request
    const {mutate: rejectRequest} = useMutation({
        mutationFn: async(requestId: Number) => {
            console.log("request : ", requestId)
            await axiosInstance.put(`connections/reject/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection request rejected successfully!")
            refetchConnectionStatus()
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})   //for the navbar
        },
        onError: (err: any)=>{
            toast.error(err.response.data.error || "An error occured!")
        }
    })

    //mutation to remove a connection
    const {mutate: removeConnection} = useMutation({
        mutationFn: async(userId:Number)=>{
            await axiosInstance.delete(`/connections/${userId}`)
        }, 
        onSuccess: ()=>{
            toast.success("Connection removed")
            refetchConnectionStatus()
            queryClient.invalidateQueries({queryKey: ["connectionRequests"]})
        },
        onError: (err: any)=>{
            toast.error(err.response.data.message || "An error occured")
        }
    })

    function getConnectionStatus(){
        return connectionStatus?.status
    }
    
    //function to render the connection button
    function renderConnectionButton(){
        const baseClass = "border text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
        switch(getConnectionStatus()){
            case "connected": 
                return (
                    <div className="flex gap-2 justify-center">
                        <div className={`${baseClass} bg-green-500 hover:bg-green-600 text-xs`}>
                            <UserCheck size={30} className="mr-2"/>
                            Connected 
                        </div>
                        <button className={`${baseClass} bg-red-500 hover:bg-red-600 text-xs`}
                        onClick={()=>removeConnection(userData.id)}>
                            <X size={30} className=""/>
                            Remove Connection
                        </button>
                    </div>
                )
            case "Pending":
                return (
                    <button className={`${baseClass} bg-yellow-500 hover:bg-yellow-600`}>
                        <Clock size={20} className="mr-2"/>
                        Pending
                    </button>
                )
            case "Received":
                return (
                    <div className="flex justify-center gap-2">
                        <button className={`${baseClass} bg-green-500 hover:bg-green-600`} 
                        onClick={()=>acceptRequest(connectionStatus.requestId)}>Accept</button>

                        <button className={`${baseClass} bg-red-500 hover:bg-red-600`} 
                        onClick={()=>rejectRequest(connectionStatus.requestId)}>Reject</button>

                    </div>

                )

            default : 
                return (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white flex justify-center 
                    items-center py-2 px-4 rounded-full cursor-pointer" onClick={()=>sendConnectionRequest(userData.id)}>
                        <UserPlus size={20} className="mr-2"/>
                        Connect
                    </button>
            )
        }
    }

    //function to upload an image
    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const fieldName = event.target.name;  // capture the name early

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedData((prev) => ({
                ...prev,
                [fieldName]: reader.result as string  // use saved name
            }));
        };
        reader.readAsDataURL(file);
    }
}
  
    return <div>
        {/* {(isOwnProfile?<div>Own</div>: <div>Other</div>)}
        {userData.username}
        {renderConnectionButton()} */}
        <div className="bg-white shadow rounded-lg mb-6">
            <div className="relative h-48 rounded-t-lg bg-cover bg-center" 
            style={{backgroundImage: `url("${editedData.bannerImg || userData.bannerImg || "/banner.png"}")`}}>
                {isEditing && (
                    <label className="bg-white p-2 rounded-full shadow cursor-pointer absolute top-2 right-2">
                        <Camera size={20}/>
                        <input type="file" className="hidden" name="bannerImg" onChange={handleImageChange} accept="image/*"/>
                    </label>
                )}
            </div>

            <div className="p-4">
                <div className="relative -mt-20 mb-4">
                    <img src={editedData?.profilePicture || userData.profilePicture || "/avatar.png"} alt={userData.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover"/>

                    {isEditing && (
                        <label className="bg-white p-2 rounded-full shadow cursor-pointer absolute bottom-0 right-1/2">
                            <Camera size={20}/>
                            <input type="file" className="hidden" name="profilePicture" onChange={handleImageChange} accept="image/*"/>
                        </label>
                    )}
                </div>

                <div className="text-center mb-4">
                    {isEditing ? (
                        <input type="text" value={editedData.name ?? userData.name} 
                        onChange={(e)=> setEditedData({...editedData, name: e.target.value})} 
                        className="text-2xl font-bold mb-2 text-center w-full"/>
                    ): (
                        <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
                    )}

                    {/* headline of the user  */}
                    {isEditing ? (
                        <input type="text" value={editedData.headline ?? userData.headline}
                        onChange={(e)=>setEditedData({...editedData, headline:e.target.value})} 
                        className="text-gray-600 text-center w-full"/>
                    ):(
                        <p className="text-gray-600">{userData.headline}</p>
                    )}

                    <div className="flex justify-center items-center mt-2">
                        <MapPin size={16} className="text-gray-500 mr-1"/>

                        {isEditing? (
                            <input type="text" value={editedData.location ?? userData.location} 
                            onChange={(e)=>setEditedData({...editedData, location:e.target.value})} 
                            className="text-gray-600 text-center"/>
                        ):(
                            <span className="text-gray-600">{userData.location}</span>
                        )}
                    </div>
                </div>
                
                {isOwnProfile ? (
                    isEditing ? (
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer"
                        onClick={()=>{
                            onSave(editedData)
                            setIsEditing(false)
                        }}>Save Profile</button>
                    ):(
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer" 
                        onClick={()=> setIsEditing(true)}>Edit Profile</button>
                    )
                ):(
                    <div className="flex justify-center">{renderConnectionButton()}</div>
                )}


            </div>
        </div>
    </div>
}