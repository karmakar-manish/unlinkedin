import { Bell, Home, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";


interface userProps {
  bannerImg: string
  name: string
  username: string
  headline: string
  profilePicture: string
 connectionLength: number
}

export default function Sidebar({bannerImg, name, headline, profilePicture, connectionLength, username}: userProps){

    return <div className="rounded-lg shadow bg-gray-200">
        <div className="p-4 text-center">
            <div className="h-16 rounded-t-lg bg-center bg-cover " style={{backgroundImage: `url("${bannerImg || "/banner.png"}")`}}/>
            
            <Link to={`/profile/${username}`} >
                <img src={profilePicture || "/avatar.png"} alt={username} className="w-20 h-20 rounded-full mx-auto mt-[-40px]"/>
                <h2 className="text-xl font-semibold mt-2">{name}</h2>
            </Link>
            <p>{headline}</p>
            <p className="text-xs">{connectionLength} connections</p>
        </div>
        <div className="border-t border-gray-400 py-3 ">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to={"/"} className=" flex items-center py-2 px-4 rounded-md hover:text-white hover:bg-gray-600 ">
                            <Home className="mr-2" size={20}/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/network"} className=" flex  items-center py-2 px-4 rounded-md hover:text-white hover:bg-gray-600">
                            <UserPlus className="mr-2" size={20}/>
                            My Network
                        </Link>
                    </li>
                    <li>
                        <Link to={"/notifications"} className=" flex  items-center py-2 px-4 rounded-md hover:text-white hover:bg-gray-600">
                            <Bell className="mr-2" size={20}/>
                            Notifications
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="border-t border-gray-400 p-4">
            <Link to={`/profile/${username}`} className="text-sm font-semibold">
                Visit your profile 
            </Link>
        </div>
    </div>
}