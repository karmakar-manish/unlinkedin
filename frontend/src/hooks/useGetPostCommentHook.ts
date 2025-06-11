import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"

export function useGetPostCommentHook(postId: number){
    return useQuery({
        queryKey: ["postComments", postId], 
        queryFn: async()=>{
            try{
                const res = await axiosInstance.get(`/post/${postId}/getComments`)
                return res.data 
            }catch(err: any)
            {   
                toast.error(err.response.data.message || "Something went wrong!")
            }
        },
        enabled: false  //don't run on mount
    })
}