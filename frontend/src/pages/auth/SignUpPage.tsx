import { Link } from "react-router-dom";
import SignUPForm from "../../components/auth/SignUPForm";

export default function SignUpPage(){

    return <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <img className=" mx-auto w-auto h-30" src="/logo.svg" alt="UnlinkedIn"/>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Make the most of your professional life
            </h2>
        </div> 
        <div className="mt-8 sm:mx-auto sm:w-sm sm:max-w-xl shadow-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                
                <SignUPForm/>   
                
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Already on UnlinkedIn?</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link to="/login" className="w-full border flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}