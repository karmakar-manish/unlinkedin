import { useParams } from "react-router-dom"
import { useAuthUserHook } from "../../hooks/useAuthUserHook"
import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"
import Post from "../../components/Post"
import Sidebar from "../../components/Sidebar"

export default function PostPage(){

    //get the postId from the params
    const {postId} = useParams()

    const {data: authUser} = useAuthUserHook()

    //fetch the post
    const {data: post, isLoading } = useQuery({
        queryKey: ["post", Number(postId)],
        queryFn: async()=>{
            const res = await axiosInstance.get(`/post/${postId}`)
            return res.data
        }
    })

    if(isLoading)
    {
        return <div>Loading post ...</div>
    }

    if(!post)
    {
        return <div>Post not found!</div>
    }

    //todo make post reactions work.

    return <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-10">
        <div className="hidden lg:block lg:col-span-1">
            <Sidebar name={authUser.name} bannerImg={authUser.bannerImg} username={authUser.username} 
            headline={authUser.headline} connectionLength={authUser.connections.length} profilePicture={authUser.profilePicture}/>
        </div>

        <div className="col-span-1 lg:col-span-3 flex justify-center">
            <div className="w-full max-w-3xl ">
                <Post key={post.id} post={post}/>
            </div>
        </div>
    </div> 
}