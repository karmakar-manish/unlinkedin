import { useState } from "react"
import TextInputComponent from "../TextInputComponent"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import {Eye, EyeClosed, Loader} from "lucide-react"

export default function SignUPForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //for togging the show password button
    const [showpassword, setShowpassword] = useState(false)

    //for interacting with the query cache
    const queryClient = useQueryClient()

    //react query
    const {mutate: signUpMutation, isPending} = useMutation({
        mutationFn: async(data: {name: string, email: string, username: string, password:string}) => {
            const res = await axiosInstance.post("/auth/signup", data)
            return res.data
        },
        onSuccess: () => {
            toast.success("Account created successfully!")
            //re-fetch the data
            queryClient.invalidateQueries({queryKey: ["authUser"]})
        },
        onError: (err: any)=>{
            toast.error(err.response.data.message || "Something went wrong!")
        }
    })
    async function handleSignup(e: any){
        e.preventDefault()
        //call the mutation function
        signUpMutation({name, username, email, password})
    }

    return <form onSubmit={handleSignup}>
        <TextInputComponent placeholder="Full name" onChange={(e)=>setName(e)} value={name}/>

        <TextInputComponent placeholder="Username" onChange={(e)=>setUsername(e)} value={username}/>

        <TextInputComponent placeholder="Email" onChange={(e)=>setEmail(e)} value={email}/>

        <div className="relative w-full max-w-md">

            <input placeholder="Password (6+ characters)" type={showpassword?"text":"password"} 
            onChange={(e)=>setPassword(e.target.value)} value={password} 
            className="border bg-gray-50 border-gray-300 text-gray-900 text-sm block rounded-lg p-2.5 mb-2 
            w-full focus:outline-none focus:ring-2 focus:ring-gray-500"/>

            <button type="button" onClick={()=>setShowpassword((prev) => !prev)} 
            className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-gray-500">
                {showpassword?<EyeClosed/>:<Eye/>}
            </button>

        </div>

        <button className="cursor-pointer text-white
         bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 w-full"
         type="submit" disabled={isPending}>
            {isPending? <Loader className="animate-spin w-5 h-5 mx-auto"/>: "Agree & Join"}
         </button>
    </form>
}

