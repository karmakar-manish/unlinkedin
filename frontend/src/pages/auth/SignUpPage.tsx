import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import SignUPForm from "../../components/auth/SignUPForm";

export default function SignUpPage(){

    return (
        <div className="min-h-screen flex-col justify-center py-10 sm:px-6 lg:px-8">
            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                <img className=" mx-auto h-20 w-auto rounded mb-1" src="/unlinkedInLogo.png" alt="UnlinkedIn"/>
                <h2 className="text-center text-3xl font-extrabold text-gray-800">
                    Make the most of your professional life
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
                    
                    <SignUPForm/>   

                </div> 

                <div className="px-8 py-4 bg-blue-900 flex justify-center rounded-b-lg">
                    <p className="text-sm text-gray-100 ">
                        Already on UnlinkedIn? {" "}
                        <Link to={"/login"} className="text-blue-400 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
            </motion.div>
        </div>
    
    )
}