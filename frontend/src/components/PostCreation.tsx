import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-toastify"
import { Image, Loader } from "lucide-react"

interface userProps {
    name: string
    profilePicture: string
}

export default function PostCreation({profilePicture, name}: userProps){
    const [content, setContent] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    
    const queryClient = useQueryClient()

    const {mutate: createPostMutation, isPending}= useMutation({
        mutationFn: async(postData: FormData)=>{
            const res = await axiosInstance.post("/post/create", postData)
            
                // headers: {"Content-Type": "application/json"}
            
            return res.data
        },
        onSuccess: ()=>{
            resetForm() //reset the state variables
            toast.success("Post created successfully!")
            queryClient.invalidateQueries({queryKey: ["feedPosts"]})    //refetch again
        },
        onError: (err: any)=>{
            toast.error(err.response.data.message || "Failed to create post")
        }
    })

    //call this function on post submission
    async function handlePostCreation()
    {
        try{
            const formData = new FormData()
            formData.append("content", content)
            
            if(image)
            {
                //user wants to upload image
                formData.append("image", image)
            }
            //call the createPost mutation
            createPostMutation(formData)
        }catch(err)
        {
            console.log("Error from handlePostCreation: ", err)
        }

    }

    //on postCreation, reset the contents
    function resetForm(){
        setContent("")
        setImage(null)
        setImagePreview(null)
    }

    //whenever user selects an image from his machine
    function handleImageChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        const file = e.target.files?.[0] || null
        setImage(file)     //this is a file object

        if(file)
            readFileAsDataURL(file).then((result)=> setImagePreview(result as string)) //stores base64 encoded string
        else
            setImagePreview(null)   //user hasnot selected any image to upload
    }

    function readFileAsDataURL(file:File): Promise<string | ArrayBuffer | null>{
        return new Promise((resolve, reject) =>{ 
            const reader = new FileReader()
            reader.onloadend = ()=> resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(file)
        })
    }

    return <div className="rounded-lg shadow mb-4 p-4 bg-gray-200">
        <div className="flex space-x-3">
            <img src={profilePicture || "/avatar.png"} alt={name} className="size-12 rounded-full"/>
            <textarea placeholder="What's on your mind?" className="w-full p-3 resize-none rounded-lg bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none min-h-[100px]" value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        {imagePreview && (
            <div>
                <img src={imagePreview} alt="Selected_Img" className="w-full mt-4 h-auto rounded-lg"/>
            </div>
        )}
        <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
                <label className="flex items-center font-serif hover:text-slate-900 text-slate-700 transition-colors duration-200 cursor-pointer">
                    <Image size={20} className="mr-2"/>
                    <span>Photo</span>
                    <input type="file" accept="image/" className="hidden" onChange={handleImageChange}/>
                </label>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700" onClick={handlePostCreation} disabled={isPending}>
                {isPending? <Loader className="animate-spin size-5 mx-auto" />: "Share"}
            </button>
        </div>
    </div>
}