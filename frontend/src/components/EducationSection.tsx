import { useState } from "react"
import type { User } from "../types"
import { School, X } from "lucide-react"

interface EducationSectionProps {
  userData: User,
  isOwnProfile: boolean,
  onSave:  (updatedData: User) => void
}

interface EducationProps {
    id: number,
    school: string,
    fieldOfStudy: string,
    startYear: number,
    endYear: number
}

interface NewEducationProps{
    school: string,
    fieldOfStudy: string,
    startYear: number,
    endYear: number
}

export default function EducationSection({userData, isOwnProfile, onSave}: EducationSectionProps){

    const [isEditing, setIsEditing] = useState(false)

    const [education, setEducation] = useState<EducationProps[]>(userData.education || [])

    const [newEducation, setNewEducation] = useState<NewEducationProps>({
        school: "",
        fieldOfStudy: "",
        startYear: 0,
        endYear: 0
    })


    //function to Add education
    function addEducation(){
        //check if the fields are not empty
        if(!newEducation.school || !newEducation.fieldOfStudy || !newEducation.startYear || !newEducation.endYear)
        {
            alert("Please fill in all required fields.")
        }
        
        const newEdu: EducationProps = {
            id: Date.now(), //temporary id
            school: newEducation.school,
            fieldOfStudy: newEducation.fieldOfStudy,
            startYear: newEducation.startYear,
            endYear: newEducation.endYear
        }

        setEducation([...education, newEdu])

        //reset the state variable
        setNewEducation({
            school: "",
            fieldOfStudy: "",
            startYear: 0,
            endYear: 0
        })
        
    }
    //function to delete education
    function deleteEducation(id:number){
        setEducation(education.filter((edu) => edu.id !== id))
    }
    //function to save the data
    function handleSave(){
        onSave({...userData, education: education})
        setIsEditing(false)
    }


    return <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Education section</h2>
        {education.map((edu)=>(
            <div key={edu.id} className="mb-4 flex justify-between items-start">
                <div className="flex items-start">
                    <School size={20} className="mr-2 mt-1"/>
                    <div>
                        <h3 className="font-semibold">{edu.fieldOfStudy}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-gray-500 text-sm">{edu.startYear} - {edu.endYear || "Present"}</p>
                    </div>
                </div>
                {/* for the cross button to delete education  */}
                {isEditing && (
                    <button onClick={()=>deleteEducation(edu.id)} className="text-red-500 cursor-pointer hover:text-red-600">
                        <X size={20}/>
                    </button>
                )}
            </div>
        ))}

        {isEditing && (
            <div>
                <input type="text" placeholder="School" value={newEducation.school} onChange={(e)=>setNewEducation({...newEducation, school: e.target.value})} className="w-full p-2 border rounded mb-2"/>

                <input type="text" placeholder="Field of Study" value={newEducation.fieldOfStudy} onChange={(e)=>setNewEducation({...newEducation, fieldOfStudy: e.target.value})} className="w-full p-2 border rounded mb-2"/>

                <input type="number" placeholder="Start Year" value={newEducation.startYear} onChange={(e)=>setNewEducation({...newEducation, startYear: Number(e.target.value)})} className="w-full p-2 border rounded mb-2"/>

                <input type="number" placeholder="End Year" value={newEducation.endYear} onChange={(e)=>setNewEducation({...newEducation, endYear: Number(e.target.value)})} className="w-full p-2 border mb-2 rounded"/>

                <button onClick={addEducation} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 cursor-pointer rounded ">
                    Add Education
                </button>
                
            </div>
        )}
        
        {/* give the button to edit education if this is own profile  */}
        {isOwnProfile && (
            <div className="mt-2">
                {isEditing ? (
                    <button onClick={handleSave}
                    className="mt-4 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded cursor-pointer">Save Changes</button>
                ): (
                    <button onClick={()=>setIsEditing(true)} className="mt-4 text-blue-500 hover:text-blue-600 cursor-pointer">Edit Education</button>
                )}
            </div>
        )}
    </div>
}