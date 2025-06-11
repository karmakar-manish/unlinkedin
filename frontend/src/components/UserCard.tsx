import { Link } from "react-router-dom";

interface UserCardProps {
    user: any,
    isConnection: boolean
}

export default function UserCard({user, isConnection}: UserCardProps)
{
    return <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-md">
        <Link to={`/profile/${user.username}`} className="flex items-center flex-col">
            <img src={user.profilePicture || "/avatar.png"} alt={user.name} className="w-24 h-24 object-cover rounded-full mb-4"/>
            <h3 className="font-semibold text-lg text-center">{user.name}</h3>
        </Link>
        <p className="text-gray-600 text-center">{user.headline}</p>
        <p className="text-sm text-gray-500 mt-2">{user.connections?.length} connections</p>
        
        <button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer px-4 py-2 rounded-md w-full">{isConnection ? "Connected" : "Connect"}</button>
    </div>
}