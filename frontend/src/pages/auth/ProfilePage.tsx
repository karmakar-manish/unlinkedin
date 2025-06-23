import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { useAuthUserHook } from "../../hooks/useAuthUserHook"
import { axiosInstance } from "../../lib/axios"
import ProfileHeader from "../../components/ProfileHeader"
import AboutSection from "../../components/AboutSection"
import ExperienceSection from "../../components/ExperienceSection"
import EducationSection from "../../components/EducationSection"
import SkillSection from "../../components/SkillSection"
import type { User } from "../../types"

import { toast } from "react-toastify"


export default function ProfilePage(){

    const {username} = useParams()
    const queryClient = useQueryClient()

    //get the authenticated user
    const {data: authUser, isLoading} = useAuthUserHook()

    //fetch the user profile
    const {data: userProfile, isLoading: isUserProfileLoading} = useQuery({
        queryKey: ["userProfile"],
        queryFn: async()=>{
            const res = await axiosInstance.get(`/users/${username}`)
            return res.data
        }
    })

    //mutation to update the profile
    const {mutate: updateProfile} = useMutation({
        mutationFn:async(updatedData: any)=>{
            await axiosInstance.put("/users/profile", updatedData)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["userProfile", username]})
            toast.success("Profile updated successfully!")
        }
    })

    if(isLoading || isUserProfileLoading)
    {
        return <div>
            User profile loading ...
        </div>
    }

   
    //checking who's profile to show, the authUser or any clicked user's
    const isOwnProfile = authUser.username === userProfile.username
    const userData = isOwnProfile ? authUser : userProfile

    function handleSave(updatedData: User){
        updateProfile(updatedData)
    }
    
    return <div className="max-w-4xl mx-auto p-10">
        <ProfileHeader userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
        <AboutSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
        <ExperienceSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
        <EducationSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
        <SkillSection userData={userData} isOwnProfile={isOwnProfile} onSave={handleSave}/>
    </div>
}