import { useState } from "react"
import {motion} from "framer-motion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"
import { toast } from "react-toastify"
import {Eye, EyeClosed, Loader, Lock, Mail, RefreshCcw, User, UserPen} from "lucide-react"
import { auth, provider } from "../../firebase"
import { signInWithPopup } from "firebase/auth"
import Input from "../Input"

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
        
        <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />

        <Input
            icon={UserPen}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
        />
        {/* <TextInputComponent placeholder="Full name" onChange={(e)=>setName(e)} value={name}/>

        <TextInputComponent placeholder="Username" onChange={(e)=>setUsername(e)} value={username}/> */}


        {!uid  ? (
            <button className="cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300 
           border-blue-300 focus:border-blue-200 focus:ring-3 focus:ring-blue-200 font-bold rounded-lg text-sm 
            px-5 py-2.5 w-full border"
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
                
                <Input
                    icon={Mail}
                    type="text"
                    placeholder={email}
                    readOnly={true}
                />

                <button className="absolute top-2.5 right-3 text-gray-600 cursor-pointer"
                onClick={()=>{
                    setEmail("")
                    setUid("")
                }}>
                    <RefreshCcw size={20}/>
                </button>
            </div>
            
        )}
        
        <div className="relative w-full mt-4">

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
                {isPending ? <Loader className="animate-spin m-auto" /> : "Agree & Join"}
        </motion.button>

        {/* <button className="cursor-pointer text-white
         bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mt-2 w-full"
         type="submit" disabled={isPending}>
            {isPending? <Loader className="animate-spin w-5 h-5 mx-auto"/>: "Agree & Join"}
         </button> */}
    </form>
}

