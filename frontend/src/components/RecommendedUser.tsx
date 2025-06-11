import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { User } from "../types"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { Check, Clock, UserCheck, UserPlus, X } from "lucide-react"

interface UserProps{
    user: User
}
export default function RecommendedUser({user}: UserProps)
{
    const queryClient = useQueryClient()

    //query function to get the connection status of the user
    const {data: connectionStatus, isLoading} = useQuery({
        queryKey: ["connectionStatus", user.id],
        queryFn: async ()=> await axiosInstance.get(`/connections/status/${user.id}`)
    })


    //mutation to send Connection Request to the User
    const {mutate: sendConnectionRequest} = useMutation({
        mutationFn: async(userId: number) => await axiosInstance.post(`/connections/request/${userId}`),
        onSuccess: ()=>{
            toast.success("Connection request sent successfully.")
            queryClient.invalidateQueries({queryKey: ["connectionStatus", user.id]})    //get the user connections again
        },
        onError: (error:any)=>{
            toast.error(error.response.data.error || "An error occured!")
        }
    })

    //mutation to accept request
    const {mutate: acceptRequest} = useMutation({
        mutationFn: async(requestId) => {
            await axiosInstance.put(`connections/accept/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection request accepted successfully!")
            queryClient.invalidateQueries({queryKey: ["connectionStatus", user.id]})
            //todo if we need to invalidate other queries
        },
        onError: (err: any)=>{
            toast.error(err.response.data.error || "An error occured!")
        }
    })

    //mutation to reject request
    const {mutate: rejectRequest} = useMutation({
        mutationFn: async(requestId) => {
            await axiosInstance.put(`connections/reject/${requestId}`)
        },
        onSuccess: ()=>{
            toast.success("Connection request rejected successfully!")
            queryClient.invalidateQueries({queryKey: ["connectionStatus", user.id]})
            //todo if we need to invalidate other queries
        },
        onError: (err: any)=>{
            toast.error(err.response.data.error || "An error occured!")
        }
    })

    
    //function for showing the button
    function renderButton(){
        if(isLoading)
        {
            return <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-500" >Loading...</div>
        }
        switch(connectionStatus?.data.status){
            case "Pending":
                return (
                    <button className="flex items-center text-sm bg-yellow-500 text-white rounded-full px-3 py-1" disabled>
                        <Clock size={16} className="mr-1"/>
                        Pending
                        
                    </button>
                )
            case "Received": 
                return (
                    <div className="flex gap-2 justify-center">
                        <button onClick={()=>acceptRequest(connectionStatus?.data.requestId)}
                        className="rounded-full p-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white cursor-pointer">
                            <Check size={16}/>
                        </button>
                        
                        <button onClick={()=>rejectRequest(connectionStatus?.data.requestId)}
                        className="bg-red-500 cursor-pointer hover:bg-red-600 rounded-full p-1 text-white flex items-center justify-center">
                            <X size={16}/>
                        </button>
                    </div>
                )
            case "connected":
                return (
                    <button className="flex justify-center items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full  " disabled>
                    <UserCheck size={16}/>
                        Connected 
                    </button>
                )
            default: 
                return (
                   <button onClick={handleConnect} className="border flex items-center justify-center px-3 py-1 rounded-full border-blue-500 text-sm text-blue-500 hover:text-blue-600 cursor-pointer hover:border-blue-600 ">
                    <UserPlus size={16} className="mr-1"/>
                        Connect
                   </button>
                )
        }
    }

    //function to send connection on button click
    function handleConnect(){
        console.log("Handle connect clicked!")
        console.log("connection status: ", connectionStatus?.data.status)
        if(connectionStatus?.data.status === "not_connected")
            sendConnectionRequest(user.id)
    }

    return <div className="flex items-center justify-between mb-4">
        <Link to={`/profile/${user.username}`} className="flex items-center">
            <img src={user.profilePicture || "/avatar.png"} alt={user.name} className="w-12 h-12 roudned-full mr-3"/>
            <div>
                <h3 className="font-semibold text-sm ">{user.name}</h3>
                <p className="text-xs">{user.headline}</p>
            </div>
        </Link>
        {renderButton()}
    </div>
}