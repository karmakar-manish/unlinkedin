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
    

    return <div className="min-h-screen flex flex-col justify-center  sm:px-2 lg:px-8 ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <img className=" mx-auto w-auto h-20 rounded mb-3 " src="/unlinkedInLogo.png" alt="UnlinkedIn"/>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
        </div> 
        <div className="mt-8 sm:mx-auto sm:w-sm sm:max-w-xl shadow-md">
            <div className="bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                
                <LoginForm/>   

                <div className="mt-2">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-100 text-gray-500">Or</span>
                        </div>
                    </div>
                </div>
                {/* Login with google provider  */}
                <button className="cursor-pointer text-gray-700
                bg-[#6c626234] hover:bg-[#898884b3] focus:outline-none focus:ring-4 focus:ring-gray-300 
                font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 w-full border border-[#bab4b4f0]" 
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

                <div className="mt-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-100 text-gray-500">New to UnlinkedIn?</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link to="/signup" className="w-full border flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}