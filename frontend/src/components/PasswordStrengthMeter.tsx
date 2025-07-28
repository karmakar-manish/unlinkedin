import { Check, X } from "lucide-react"

function PasswordCriteria({password}: {password: string}){
    /*  { 
            label: string,  // what the rule says to the user
            met: boolean    // whether the password meets the condition
        }
    */ 

    const criteria = [
        {label: "Atleast 6 characters", met: password.length>=6},
        {label: "Contains uppercase letter", met: /[A-Z]/.test(password)},
        {label: "Contains lowercase letter", met: /[a-z]/.test(password)},
        {label: "Contains a number", met: /\d/.test(password)},
        {label: "Contains a special character", met: /[^A-Za-z0-9]/.test(password)}
    ]

    return <div className="mt-2">
        {criteria.map((item)=>(
            <div key={item.label} className="flex items-center text-xs">
                {item.met ? (
                    <Check className="size-4 text-green-500 mr-2"/>
                ):(
                    <X className="size-4 text-gray-500 mr-2"/>
                )}
                <span className={item.met ? "text-green-500" : "text-gray-400"}>
                    {item.label}
                </span>
            </div>
        ))}
    </div>
}

//for calculating the strength of the password
function getStrength({password}:{password:string})
{
    let strength = 0;

    if(password.length >= 6) strength++;
    if(password.match(/[a-z]/) && password.match(/[A-Z]/))  strength++;     //for upper and lowercase
    if(password.match(/\d/)) strength++;    //for numbers
    if(password.match(/[^a-zA-Z\d]/))   strength++;     //for special characters

    return strength
}

export default function PasswordStrengthMeter({password}: {password: string}){

    const strength = getStrength({password})

    const getStrengthText = (strength: number)=>{
        if(strength === 0)  return "Very Weak"
        if(strength === 1)  return "Weak"
        if(strength === 2)  return "Fair"
        if(strength === 3)  return "Good"
        return "Strong"
    }

    const getColor = (strength:number) => {
        if(strength === 0)  return "bg-red-500"
        if(strength === 1)  return "bg-red-400"
        if(strength === 2)  return "bg-yellow-500"
        if(strength === 3)  return "bg-yellow-400"
        return "bg-green-500"
    }

    return <div className="mt-2"> 
        <div className="flex justify-center items-center mb-1">
            <span className="text-xs text-gray-400 mr-2">Password strength</span>
            <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
        </div>

        <div className="flex space-x-1">
            {[...Array(4)].map((_, index) => (
                <div
                    className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${index < strength ? getColor(strength) : "bg-gray-400"}`}
                />
            ))}
        </div>
        <PasswordCriteria password={password}/>
    </div>
}