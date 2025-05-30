import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios"
import { Link } from "react-router-dom"
import { Bell, Home, LogIn, LogOut, User, UserPlus, Users } from "lucide-react"

export default function Navbar(){
    //getting the authUser data from the cache
    const {data: authUser} = useQuery({queryKey: ["authUser"]})
    console.log("authUser: " , authUser)

    const queryClient = useQueryClient()    //manually interact with the query cache   

    //getting the notifications from the backend api
    const {data: notifications} = useQuery({
        queryKey: ["notifications"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/notifications")
            return res.data
        },
        enabled: !!authUser     // run this query only if the authUser is there
    })

    //getting the connectionRequests of the user from the backend
    const {data: connectionRequests} = useQuery({
        queryKey: ["connectionRequests"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/connections")
            return res.data
        },
        enabled: !!authUser //only call if we have authenticated user
    })

    //for logging out
    const {mutate: logout} = useMutation({
        mutationFn: async()=>{
            await axiosInstance.post("/auth/logout")
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["authUser"]})     //re-fetch the data
        }
    })

    //get the count of all unread notifications
    const unreadNotificationCount = notifications?.filter((notif: any) => !notif.read).length
    console.log("unreadCount : ", unreadNotificationCount)

    //get the connection request count
    const unreadConnectionRequestsCount = connectionRequests?.length 
    console.log("unread connection count : ", unreadConnectionRequestsCount)


    return <div className="bg-blue-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between py-3">
                <div className="flex items-center space-x-4">
                    <Link to={"/"}>
                        <img className="h-8 rounded" src="/small-logo.png" alt="linkedIn_Logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    {authUser? (
                        <>
                            <Link to={"/"} className="flex flex-col items-center">
                                <Home size={20}/>
                                <span className="text-xs md:block">Home</span>
                            </Link>
                            <Link to={"/network"} className="flex flex-col items-center">
                                <div className="relative">
                                    <Users size={20}/>
                                    {unreadConnectionRequestsCount > 0 && (
                                    // absolute -top-1 -right-1 md:right-4
                                    <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full size-3 md:size-4 flex items-center justify-center p-2">{unreadConnectionRequestsCount}</span>
                                )}
                                </div>
                                <span className="text-xs  md:block">My Network</span>
                            </Link>

                            <Link to={"/notifications"} className="flex flex-col items-center">
                                <div className="relative">
                                    <Bell size={20}/>
                                    {unreadNotificationCount > 0 && (
                                        <span className="absolute -top-1 -right-2 text-xs bg-blue-500 text-white rounded-full size-3 md:size-4 flex items-center justify-center p-2">{unreadNotificationCount}</span>
                                    )}
                                </div>
                                <span className="text-xs md:block">Notifications</span>
                            </Link>

                            <Link to={`/profile/${authUser}`} className="flex flex-col items-center">
                                <User size={20}/>
                                <span className="text-xs md:block">Me</span>
                            </Link>

                            <button className="flex flex-col items-center text-gray-600 hover:text-red-600 cursor-pointer" onClick={()=>logout()}>
                                <LogOut size={20}/>
                                <span className="text-xs md:block">Logout</span>
                            </button>
                        </>
                    ): (
                        <>
                            <Link to={"/login"} className="text-sm text-gray-600 hover:text-blue-600 transition flex flex-col items-center">
                                <LogIn size={20}/>
                                Sign In
                            </Link>
                            <Link to={"/signup"} className="text-sm text-gray-600 hover:text-blue-600 transition flex flex-col items-center">
                                <UserPlus size={20}/>
                                Join now
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
       
    </div>
}