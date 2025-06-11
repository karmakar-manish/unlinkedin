import { useQuery } from "@tanstack/react-query"
import { useAuthUserHook } from "../../hooks/useAuthUserHook"
import { axiosInstance } from "../../lib/axios"
import Sidebar from "../../components/Sidebar"
import { UserPlus } from "lucide-react"
import FriendRequest from "../../components/FriendRequest"
import UserCard from "../../components/UserCard"

export default function NetworkPage(){
    const {data: authUser} = useAuthUserHook()

    //get all the pending connection requests of the current user
    const {data: connectionRequests, isLoading: isLoadingConnections} = useQuery({
        queryKey: ["connectionRequests"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/connections/requests")
            return res.data
        }
    })

    //get all the connections of the user
    const {data: connections} = useQuery({
        queryKey: ["connections"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/connections")
            return res.data
        }
    })

    return <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-10">
        <div className="col-span-1">
            <Sidebar name={authUser.name} bannerImg={authUser.bannerImg} username={authUser.username} headline={authUser.headline} connectionLength={authUser.connections.length} profilePicture={authUser.profilePicture}/>
        </div>

        <div className="col-span-1 lg:col-span-3">
            <div className="bg-gray-200 rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-6">My Network</h1>

                {connectionRequests && connectionRequests.length > 0 ? (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Connection Request</h2>
                        <div className="space-y-4">   
                            {connectionRequests.map((connection: any)=>(
                                <FriendRequest key={connection.id} connection={connection}/>
                            ))}
                        </div>
                    </div>
                ):(
                    <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
                        <UserPlus size={48} className=" mx-auto text-gray-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">No Connection Requests</h3>
                        <p className="text-gray-600">You don't have any pending connection requests at the moment.</p>
                        <p className="text-gray-600 mt-2">Explore suggested connections below to expand your network!</p>
                    </div>
                )}
                {connections?.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">My Connections</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {connections.map((connection: any) => (
                                <UserCard key={connection.id} user={connection} isConnection={true} />
                            ))}
                        </div> 
                    </div>
                        
                )}
            </div>
        </div>

    </div>
}