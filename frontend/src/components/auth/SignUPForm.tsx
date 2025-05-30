import { useState } from "react"
import TextInputComponent from "../TextInputComponent"
import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-hot-toast"
import {Loader} from "lucide-react"

export default function SignUPForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    //react query
    const {mutate: signUpMutation, isPending} = useMutation({
        mutationFn: async(data: {name: string, email: string, username: string, password:string}) => {
            const res = await axiosInstance.post("/auth/signup", data)
            return res.data
        },
        onSuccess: () => {
            toast.success("Account created successfully!")
        },
        onError: ()=>{
            toast.error("Something went wrong!")
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

        <TextInputComponent placeholder="Password (6+ characters)" onChange={(e)=>setPassword(e)} value={password} type="password"/>

        <button className="cursor-pointer text-white
         bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 w-full"
         type="submit" disabled={isPending}>
            {isPending? <Loader className="animate-spin w-5 h-5 mx-auto"/>: "Agree & Join"}
         </button>
    </form>
}

