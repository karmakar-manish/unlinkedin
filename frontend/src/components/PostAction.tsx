    import type { ReactNode } from "react"

interface PostActionProps{
    icon: ReactNode
    text: string
    onClick?: ()=>void | Promise<void>
}


export default function PostAction(props: PostActionProps){
    return <button onClick={props.onClick} className="cursor-pointer">
        <div className="flex items-center gap-1">
            <div >
                {props.icon}
            </div>
            <div >
                {props.text}
            </div>
        </div>
    </button>
}