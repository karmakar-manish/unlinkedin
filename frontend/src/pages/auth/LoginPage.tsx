import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

export default function LoginPage(){

    const queryClient = useQueryClient()
    
    //login api for google provider signin
    const {mutate: providerLoginMutation, isPending} = useMutation({
        mutationFn: async()=>{
            try{
                const res = await signInWithPopup(auth, provider);
                const uid = res.user.uid

                const response = await axiosInstance.post("/auth/providerLogin", {uid})
                return response.data 
            }
            catch(err)
            {
                throw err   //onError is triggered
            }
        },
        onSuccess: ()=>{
            //re-fetch the authenticated user's data
            queryClient.invalidateQueries({queryKey: ["authUser"]})
        },
        onError: (err:any)=>{
            toast.error(err.response.data.message || "Something went wrong") 
        }
    })

    //button function for provider login
    async function handleProviderLogin(e:any){
        e.preventDefault()
        providerLoginMutation() //call the mutation
    }
    

    return <div className="min-h-screen flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <img className=" mx-auto w-auto h-20 rounded mb-1 " src="/unlinkedInLogo.png" alt="UnlinkedIn"/>
            <h2 className="text-center text-3xl font-extrabold text-gray-800">
                Sign in to your account
            </h2>
        </div> 

        <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 20}}
            transition={{duration: 0.5}}
            className=""
        >
            <div className="mt-2 sm:mx-auto sm:w-sm sm:max-w-xl shadow-md">
                <div className="bg-blue-50 py-8 px-4 shadow sm:rounded-t-lg sm:px-10">
                    
                    <LoginForm/>  
                    
                    <div className="mt-2">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative mb-1 flex justify-center text-sm">
                                <span className="px-2 bg-gray-100 text-gray-500">Or</span>
                            </div>
                        </div>
                    </div>
                    {/* Login with google provider  */}
                    <button className="cursor-pointer text-gray-700
                    bg-gray-200 hover:bg-gray-300 
                    border-blue-300 focus:border-blue-200 focus:ring-3 focus:ring-blue-200
                    font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 w-full border " 
                    onClick={handleProviderLogin} disabled={isPending}>
                    {
                        isPending? <Loader className="animate-spin w-5 h-5 mx-auto"/>: (
                            <div className="flex justify-center">
                                <img src="/google.png" alt="google_img" className="w-5 h-5 mr-2"/>
                                <span>Login with Google</span>
                            </div>
                        )
                    }
                    </button>
                </div> 

                
                <div className="px-8 py-4 bg-blue-900 flex justify-center rounded-b-lg">
                    <p className="text-sm text-gray-100 ">
                        New to UnlinkedIn? {" "}
                        <Link to={"/signup"} className="text-blue-400 hover:underline">Signup</Link>
                    </p>
                </div>
            </div>
        </motion.div>


    </div>
}