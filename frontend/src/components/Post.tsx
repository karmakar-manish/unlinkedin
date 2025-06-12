import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { PostType } from "../types"
import { useMemo, useState } from "react"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { Loader, MessageCircle, Send, Share2, ThumbsUp, Trash2 } from "lucide-react"
import PostAction from "./PostAction"
import { useAuthUserHook } from "../hooks/useAuthUserHook"

import { formatDistanceToNow} from "date-fns"
import { useGetPostCommentHook } from "../hooks/useGetPostCommentHook"

interface PostProps{
    post : PostType
}


export default function Post({post}: PostProps)
{
    const [showComment, setShowComment] = useState(false)
    const [newComment, setNewComment] = useState("")
    
    //fetch the post comments from the backend
    const {data: postComments, refetch: fetchPostComments, isFetching: isFetchingComments } = useGetPostCommentHook(post.id)

    // const {data: authUser} = useQuery<AuthUserProps>({queryKey: ["authUser"]})
    const {data: authUser} = useAuthUserHook()

    const queryClient = useQueryClient()

    //check if the current user is the owner of the post
    const isOwner = useMemo(()=>{
        console.log("Authuser: ", authUser?.id)
        console.log("Post: ", post.Author?.id)

        return Number(authUser?.id) === Number(post.Author?.id)
    }, [authUser?.id, post.Author?.id])

    console.log("Owner : ", isOwner)
    //check if the user has already liked the post
    const isLiked = useMemo(() => {
        // if(!post.likes) return false 
        let liked=false;
        post.likes.some(like => {

            liked = liked || Number(like.userId) == Number(authUser?.id)
        })
        return liked 
    }, [post.likes])

    //mutation to delete a post
    const {mutate: deletePost, isPending: isDeletingPost} = useMutation({
        mutationFn: async()=>{
            await axiosInstance.delete(`/post/delete/${post.id}`)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["feedPosts"]})    //re-fetch the cache
            toast.success("Post deleted successfully")
        },
        onError: (err: any)=>{
            toast.error(err.response.data.message || "Failed to delete post")
        }
        
    })

    //mutation for creating a comment
    const {mutate: createComment, isPending:isAddingComment}  = useMutation({
        mutationFn: async(newComment: string)=>{
            await axiosInstance.post(`/post/${post.id}/comment`, {content: newComment})
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["feedPosts"]})    //re-fetch the cache
            queryClient.invalidateQueries({queryKey: ["post", post.id]})
            toast.success("Comment created successfully")
        }, 
        onError: (err: any)=>{
            toast.error(err.response.data.message || "Failed to add comment")
        }
    })
    

    //mutation to like a post
    const {mutate: likePost, isPending:isLikingPost}  = useMutation({
        mutationFn: async()=>{
            await axiosInstance.post(`/post/${post.id}/like`)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["feedPosts"]})    //re-fetch the cache
            queryClient.invalidateQueries({queryKey: ["post", post.id]})
        }
    })

    return <div className="bg-gray-200 rounded-lg shadow mb-4">
        <div className="p-4">
            <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center">
                    <Link to={`/profile/${post?.Author?.username}`}>
                        <img src={post?.Author?.profilePicture || "/avatar.png"} alt={post?.Author?.name} className="rounded-full size-10 mr-3"/>
                    </Link>
                    <div>
                        <Link to={`/profile/${post?.Author?.username}`}>
                            <h3 className="font-semibold">{post?.Author?.name}</h3>
                        </Link>
                        <p className="text-xs">{post?.Author.headline}</p>
                        <p className="text-xs">{formatDistanceToNow(new Date(post.createdAt), {addSuffix: true})}</p>
                    </div>
                </div>

                 {/* check if we are the owner of the post, and show delete button  */}

                {isOwner && (
                    <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={()=>{
                        if(!window.confirm("Are you sure you want to delete this post?")) return 
                        deletePost()
                    }}>
                        {isDeletingPost? <Loader size={18} className="animate-spin"/> : <Trash2 size={18} />}
                    </button>
                )}

            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && <img src={post.image} alt="Post Content Image" className="rounded-lg w-full mb-4"/>}

            <div className="flex justify-between">
                <PostAction 
                icon={<ThumbsUp size={18} className={isLiked? "text-blue-500 fill-blue-300": ""}/>}
                text={`Like (${post.likes?.length || 0})`}
                onClick={async()=>{
                    //if we are liking, we don't want to send another request by calling the likepost function
                    if(isLikingPost)    return; 
                    likePost()  //mutation to like a post
                }}
                />

                <PostAction 
                icon={<MessageCircle size={18}/>}
                text={`Coment (${post.comments?.length || 0})`}
                onClick={async()=>{
                    if(isFetchingComments)   return
                    await fetchPostComments()   //refetch the comments of the  post
                    setShowComment(!showComment)
                }}
                />
                <PostAction icon={<Share2 size={18}/>} text="Share"/>
            </div>
        </div>
        {showComment && (
           <div className="px-4 pb-4">
                <div className="mb-4 max-h-60 overflow-y-auto">
                    {//show the post comments
                        postComments.map((e:any)=>{
                            return <CommentDisplay key={e.id} content={e.content} createdAt={e.createdAt} userId={e.userId} 
                            User={e.User}/>
                    })}
 
                </div>
                <form onSubmit={async(e)=>{
                    e.preventDefault()
                    //dont add comment for space of empty string
                    if(newComment.trim())
                    {
                        createComment(newComment) //add the comment
                        setNewComment("")   //reset the state variable
                        await fetchPostComments()   //refetch the comments
                    }
                }} className="flex items-center justify-between ">
                    
                   <input type="text" value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder="Add a comment..."
                    className="border bg-gray-50 border-gray-300 text-gray-900 text-sm block rounded-l-full p-2.5 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"/>
                     
                    <div className="">
                        <button type="submit" disabled={isAddingComment} className="cursor-pointer w-12 items-center flex justify-center h-10 text-white bg-blue-700 rounded-r-full hover:bg-blue-800">
                        {isAddingComment? (
                            <Loader size={18} className="animate-spin"/>
                        ): <Send size={"18"} />}
                        </button>
                    </div>
                </form>
           </div>
        )}
    </div>
}

function CommentDisplay({
    content, 
    createdAt, 
    User
}: {
    content: string,
    createdAt: string,
    userId: string,
    User: {
        name: string,
        username: string,
        profilePicture: string,
        headline: string
    }
})
{
    return <div className="flex bg-gray-50 p-2 rounded mb-2">
            <img src={User.profilePicture || "/avatar.png"} 
            alt={User.name}
            className="w-8 h-8 rounded-full mr-2"/>

            <div className="">
                <div className="flex items-center mb-1 ">
                    <span className="font-semibold mr-2 ">{User.name}</span>
                    <span className="text-xs">{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</span>
                </div>
                <p className="">{content}</p>
            </div>
        
    </div>
}