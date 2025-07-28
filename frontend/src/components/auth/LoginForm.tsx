import {motion} from "framer-motion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import { Eye, EyeClosed, Loader, Lock, User } from "lucide-react"
import Input from "../Input"

export default function LoginForm()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //for togging the show password button
    const [showpassword, setShowpassword] = useState(false)


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


    //button function for username, password login
    async function handleLogin(e: any)
    {
        e.preventDefault()
        //call the login mutation
        loginMutation({username, password})
    }


    return <form onSubmit={handleLogin} >

        <Input
        icon={User}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {/* <TextInputComponent placeholder="Username" onChange={(e)=>setUsername(e)} value={username}/> */}

        <div className="relative w-full max-w-md">
            <Input
            icon={Lock}
            type={showpassword? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="button" onClick={()=>setShowpassword((prev) => !prev)} 
            className="absolute top-2.5 right-3 text-gray-600 cursor-pointer hover:text-gray-500">
                {showpassword?<EyeClosed size={20}/>:<Eye size={20}/>}
            </button>

        </div>

        <motion.button
            className='mt-3 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
            font-bold rounded-lg shadow-lg hover:from-blue-600
            hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                focus:ring-offset-gray-900 transition duration-200 cursor-pointer'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            disabled={isPending}
        >
                {isPending ? <Loader className="animate-spin m-auto" /> : "Sign in"}
        </motion.button>
    </form>
}
