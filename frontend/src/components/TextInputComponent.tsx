export default function({
    placeholder,
    onChange,
    type = "text",
    value
}: {
    placeholder: string,
    onChange: (value: string) => void,
    type?: string,
    value: string
}){
    return <div>
        <input placeholder={placeholder} type={type} 
        onChange={(e)=>onChange(e.target.value)} value={value} 
        className="border bg-gray-50 border-gray-300 text-gray-900 
        text-sm block rounded-lg p-2.5 mb-2 w-full focus:outline-none 
        focus:ring-2 focus:ring-gray-500"/>
    </div>
}