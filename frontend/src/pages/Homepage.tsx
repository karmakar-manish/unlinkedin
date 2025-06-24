import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios"
import Sidebar from "../components/Sidebar"
import PostCreation from "../components/PostCreation"
import Post from "../components/Post"
import { User } from "lucide-react"
import RecommendedUser from "../components/RecommendedUser"
import { useAuthUserHook } from "../hooks/useAuthUserHook"

interface User {
  id: number
  name: string
  bannerImg: string
  username: string
  headline: string
  profilePicture: string
  location: string
  about: string 
  skills: string[],
  
  connections: {
    id: number
    username: string,
    profilePicture: string,
    headline: string
  }[]

  experience: {
        id: number
        title: string,
        company: string,
        startDate: string,
        endDate: string,
        description: string,
        // userId: number
    }[]

    education: {
        id: number,
        school: string,
        fieldOfStudy: string,
        startYear: number,
        endYear: number,
    }[]
}

interface PostType {
    id: number
    content: string,
    image?:string
    createdAt: string

    Author: {
        id: number
        name: string,
        username: string
        profilePicture: string
        headline: string
    }

    comments: {
      content: string
      createdAt: string
      userId: number
      postId: number
      User: {
        id: number
        name: string 
        profilePicture: string 
      }
    }[]

    likes: {
      userId: number
    }[]
}


export default function Homepage(){

    //get the cached authUser from useQuery
    // const {data: authUser} = useQuery<User>({queryKey: ["authUser"]})
    const {data: authUser} = useAuthUserHook()

    //fetch the recommended user's data from backend api
    const {data: recommendedUsers} = useQuery<User[]>({
        queryKey: ["recommendedUsers"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/users/suggestions")
            return res.data as User[]            
        }
    })

    //fetch the feedPosts
    const {data: feedPosts} = useQuery({
        queryKey: ["feedPosts"],
        queryFn: async()=>{
            const res = await axiosInstance.get("/post")
            return res.data
    }})


    if(!authUser)
    {
        return <div>Loading...</div>
    }

    return <div className="p-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:block lg:col-span-1">
            <Sidebar name={authUser.name} bannerImg={authUser.bannerImg} username={authUser.username} headline={authUser.headline} connectionLength={authUser.connections.length} profilePicture={authUser.profilePicture}/>
        </div>
        
        <div className="col-span-1 lg:col-span-2">
            <PostCreation name={authUser.name} profilePicture={authUser.profilePicture}/>
            
            {feedPosts?.map((post: PostType) => (
                <Post key={post.id} post={post}/>
            ))}

            {/* posts?.length === 0 */}
            {feedPosts?.length === 0 && (
                <div className=" rounded-lg shadow p-8 text-center">
                    <div className="mb-6">
                        <User size={64} className="text-blue-500 mx-auto"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">No Posts Yet</h2>
                    <p className="text-gray-600 mb-4">Connect with others to start seeing posts in your feed!</p>
                </div>
            )}
        </div>
        {recommendedUsers && recommendedUsers?.length > 0 && (
            <div className="col-span-1 lg:block">
                <div className="p-4 bg-gray-200 rounded-lg shadow">
                    <h2 className="font-semibold mb-4">People you may know</h2>
                    {recommendedUsers?.map((user: User)=>(
                        <RecommendedUser key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        )}
    </div>
}