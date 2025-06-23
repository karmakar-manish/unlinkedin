import { useEffect, useState } from "react"
import type { User } from "../types"
import { Briefcase, X } from "lucide-react"
import formatDate from "../utils/dateUtils"

interface ExperienceSectionProps {
  userData: User,
  isOwnProfile: boolean,
  onSave:  (updatedData: User) => void
}

interface ExperienceProps {
    id: number,
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string,
}

interface NewExperienceProps{
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string,
    currentlyWorking: boolean
}


export default function ExperienceSection({userData, isOwnProfile, onSave}: ExperienceSectionProps){
    const [isEditing, setIsEditing] = useState(false)
    const [experiences, setExperiences] = useState<ExperienceProps[]>(userData.experience || [])


    const [newExperience, setNewExperience] = useState<NewExperienceProps>({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: false
    })

    useEffect(()=>{
        setExperiences(userData.experience || [])
    }, [userData.experience])

    //function to add an experience
    function handleAddExperience(){

        if (!newExperience.title || !newExperience.company || !newExperience.startDate) {
            alert("Please fill in all required fields.");
            return;
        }
        const newExp: ExperienceProps = {
            id: Date.now(), //temporary id
            title: newExperience.title,
            company: newExperience.company,
            startDate: newExperience.startDate,
            endDate: newExperience.currentlyWorking? "": newExperience.endDate,
            description: newExperience.description
        }

        setExperiences([...experiences, newExp])
        //reset the setNewExperience state variable
        setNewExperience({
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            currentlyWorking: false
        })
    }

    //function to delete an experience
    function handleDeleteExperience(expId: number){
        setExperiences(experiences.filter((exp)=> exp.id !== expId))
    }

    //function to save the experience
    function handleSave(){
        onSave({...userData, experience: experiences})
        setIsEditing(false)
    }

    function handleCurrentlyWorkingChange(event: React.ChangeEvent<HTMLInputElement>){
        const checked = event.target.checked
       
        setNewExperience((prev)=>({
            ...prev,
            currentlyWorking: checked,
            endDate: checked? "": prev.endDate
        }))

    }

   
    return <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Experience Section</h2>

        {experiences.map((exp: ExperienceProps)=>(
            <div key={exp.id} className="mb-4 flex justify-between items-start">
                <div className="flex items-start">
                    <Briefcase size={20} className="mr-2 mt-1"/>
                    <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500 text-sm">
                            {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                        </p>
                        <p className="text-gray-700">{exp.description}</p>
                    </div>
                </div>
                {isEditing && (
                    <button onClick={()=>handleDeleteExperience(exp.id)}
                    className="text-red-500 hover:text-red-600 cursor-pointer">
                        <X size={20}/>
                    </button>
                )}
            </div>
        ))}

        {isEditing && (
            <div className="mt-5">
                <input type="text" placeholder="Title" value={newExperience.title} 
                onChange={(e)=> setNewExperience({...newExperience, title: e.target.value})}
                className="w-full border rounded mb-2 p-2"/>

                <input type="text" placeholder="Company" value={newExperience.company} 
                onChange={(e)=> setNewExperience({...newExperience, company: e.target.value})}
                className="w-full border rounded mb-2 p-2"/>

                <input type="date" placeholder="startDate" value={newExperience.startDate} 
                onChange={(e)=> setNewExperience({...newExperience, startDate: e.target.value})}
                className="w-full border rounded mb-2 p-2"/>

                <div className="flex items-center mb-2">
                    <input type="checkbox" id="currentlyWorking" checked={newExperience.currentlyWorking}
                    onChange={handleCurrentlyWorkingChange} className="mr-2"/>
                    <label htmlFor="currentlyWorking">I currently work here</label>
                </div>

                {/* show this only if currently working checkbox is not clicked  */}
                {!newExperience.currentlyWorking && (
                    <input type="date" placeholder="endDate" value={newExperience.endDate} 
                    onChange={(e)=> setNewExperience({...newExperience, endDate: e.target.value})}
                    className="w-full border rounded mb-2 p-2"/>
                )}

                <textarea placeholder="Description" value={newExperience.description} 
                onChange={(e)=> setNewExperience({...newExperience, description:e.target.value})}
                className="w-full border p-2 rounded mb-2 resize-none"/>
                
                <button onClick={handleAddExperience}
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer rounded py-2 px-4 text-white">Add Experience</button>
            </div>
        )}

        {/* only display edit button if it is our own profile  */}

        {isOwnProfile && (
            <div>
                {isEditing ? (
                    <button onClick={handleSave} 
                    className="mt-4 bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 py-2 text-white rounded">Save Changes</button>
                ): (
                    <button onClick={()=>setIsEditing(true)}
                    className="mt-4 hover:text-blue-600 cursor-pointer text-blue-500">Edit Experiences</button>
                )}
            </div>
        )}
    </div>
}