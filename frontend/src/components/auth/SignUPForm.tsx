import { useState } from "react"
import TextInputComponent from "../TextInputComponent"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import {Eye, EyeClosed, Loader, RefreshCcw} from "lucide-react"
import { auth, provider } from "../../firebase"
import { signInWithPopup } from "firebase/auth"

export default function SignUPForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [uid, setUid] = useState("")   //for the uid of provider email
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //for togging the show password button
    const [showpassword, setShowpassword] = useState(false)

    //for interacting with the query cache
    const queryClient = useQueryClient()

    //react query
    const {mutate: signUpMutation, isPending} = useMutation({
        mutationFn: async(data: {name: string, email: string, username: string, password:string, uid: string}) => {
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
        signUpMutation({name, username, email, password, uid})
    }

    //mutation to get the uid of the user
    const {mutate: getProviderUid, isPending: isGettingUid} = useMutation({
        mutationFn: async()=>{
            try{
                const res = await signInWithPopup(auth, provider)
                setUid(res.user.uid)
                setEmail(res.user.email ?? "")
            }
            catch(err)
            {
                throw err   //onError is triggered
            }
        },
        onError: ()=>{
            toast.error("Can't get Uid")
            setUid("")
            setEmail("")
        }
    })

    //for getting the uid of the provider email
    async function handleProviderEmail(e: any)
    {
        e.preventDefault()
        //call the mutation function to get provider uid
        getProviderUid()
    }

    return <form onSubmit={handleSignup}>
        <TextInputComponent placeholder="Full name" onChange={(e)=>setName(e)} value={name}/>

        <TextInputComponent placeholder="Username" onChange={(e)=>setUsername(e)} value={username}/>


        {!uid  ? (
            <button className="cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300 
            focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm 
            px-5 py-2.5 mb-2 w-full border border-[#585555f0]"
            onClick={handleProviderEmail} disabled={isGettingUid}>
            {
                isGettingUid ? <Loader className="animate-spin w-5 h-5 mx-auto"/> : (
                    <div className="flex justify-center">
                        <img src="/google.png" alt="google_img" className="w-5 h-5 mr-2"/>
                        <span>Click to add Email</span>
                    </div>
                )
            }
            </button>
        ):(
            <div className="relative">
                <input type="text" placeholder={email} readOnly={true}
                className="border bg-gray-50 border-gray-300 text-gray-900 
                text-sm block rounded-lg p-2.5 mb-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-gray-500"/>

                <button className="absolute top-3 right-3 text-gray-600 cursor-pointer"
                onClick={()=>{
                    setEmail("")
                    setUid("")
                }}>
                    <RefreshCcw />
                </button>
            </div>
            
        )}
        
        <div className="relative w-full">

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

