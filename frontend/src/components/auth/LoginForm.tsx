import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import TextInputComponent from "../TextInputComponent"
import { Loader } from "lucide-react"

export default function LoginForm()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const queryClient = useQueryClient()

    //call the login api
    const {mutate: loginMutation, isPending} = useMutation({
        mutationFn: async(userData: {username: string, password: string})=>{
            const res = await axiosInstance.post("/auth/login", userData)
            return res.data
        },
        onSuccess: ()=>{
            //re-fetch the authenticated user's data
            queryClient.invalidateQueries({queryKey: ["authUser"]})
        },
        onError: (err: any)=>{
            toast.error(err.response.data.message || "Something went wrong")
        }
    })

    async function handleLogin(e: any)
    {
        e.preventDefault()
        //call the login mutation
        loginMutation({username, password})
    }


    return <form onSubmit={handleLogin}>

        <TextInputComponent placeholder="Username" onChange={(e)=>setUsername(e)} value={username}/>

        <TextInputComponent placeholder="Password (6+ characters)" onChange={(e)=>setPassword(e)} value={password} type="password"/>

        <button className="cursor-pointer text-white
         bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 w-full"
         type="submit" disabled={isPending}>
            {isPending? <Loader className="animate-spin w-5 h-5 mx-auto"/>: "Sign in"}
         </button>
    </form>
}
