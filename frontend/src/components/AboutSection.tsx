import { useEffect, useState } from "react"
import type { User } from "../types"

interface AboutSectionProps {
  userData: User,
  isOwnProfile: boolean,
  onSave:  (updatedData: User) => void
}

export default function AboutSection({userData, isOwnProfile, onSave}: AboutSectionProps)
{
    // console.log("user: ", userData)
    const [isEditing, setIsEditing] = useState(false)
    const [about, setAbout] = useState<string>(userData.about || "")

    useEffect(()=>{
        setAbout(userData.about)
    }, [userData])


    function handleSave(){
        setIsEditing(false)
        onSave({...userData, about})
    }


    return <div className="bg-gray-100 shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">About</h2>

        {isOwnProfile && (
            <div>
                {isEditing ? (
                    <div>
                        <textarea className="border w-full p-2 rounded resize-none"
                        value={about} onChange={(e)=>setAbout(e.target.value)} rows={4}/>
                        
                        <button className="mt-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded"
                        onClick={handleSave}>Save</button>
                    </div>
                ): (
                    <div>
                        <p className="mb-2">{about}</p>
                        <button className="mt-2 text-blue-500 hover:text-blue-600  cursor-pointer"
                        onClick={()=>setIsEditing(true)}>Edit</button>
                    </div>
                )}
            </div>
        )}

    </div>
}