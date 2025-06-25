import { X } from "lucide-react"
import type { User } from "../types"
import { useEffect, useState } from "react"

interface SkillSectionProps {
    userData: User,
    isOwnProfile: boolean,
    onSave: (updatedUser: User) => void
}


export default function SkillSection({userData, isOwnProfile, onSave}: SkillSectionProps){
   
    const [isEditing, setIsEditing] = useState(false)
    const [skills, setSkills] = useState<string[]>(userData.skills || [])
    const [newSkill, setNewSkill] = useState("")

    //reload the values on page refresh
    useEffect(()=>{
        setSkills(userData.skills)
    }, [userData])
    
    //function to add a new skill
    function handleAddSkill(){
        //only if the new skill is not present in Skills array
        if(newSkill && !skills.includes(newSkill)){
            setSkills([...skills, newSkill])
            setNewSkill("") //reset newSkill useState
        }
    }
    function handleDeleteSkill(skill: string){
        setSkills(skills.filter((s) => s !== skill))
    }
    function handleSave(){
        onSave({...userData, skills})
        setIsEditing(false)
    }

    return <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap">
            {skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center">
                    {skill}
                    {isEditing && (
                        <button onClick={()=>handleDeleteSkill(skill)} className="ml-2 text-red-500 hover:text-red-600 cursor-pointer">
                            <X size={14}/>
                        </button>
                    )}
                </span>
            ))}
        </div>

        {isEditing && (
            <div className="mt-4 flex">
                <input type="text" placeholder="New Skill" value={newSkill} onChange={(e)=>setNewSkill(e.target.value)} className="flex-grow p-2 border rounded-l-lg border-slate-500"/>

                <button onClick={handleAddSkill}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-r-lg ">Add Skill</button>
            </div>
        )}

        {isOwnProfile && (
            <div>
                {isEditing ? (
                    <button onClick={handleSave} className="mt-4 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded cursor-pointer">Save Changes</button>
                ):(
                    <button onClick={()=>setIsEditing(true)} className="mt-4 text-blue-500 hover:text-blue-600 cursor-pointer">Edit Skills</button>
                )}
            </div>
        )}

    </div>
}