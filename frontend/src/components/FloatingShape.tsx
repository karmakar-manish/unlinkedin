import {motion} from "framer-motion"

type FloatingShapeProps = {
    color: string,
    size: string,
    top: string,
    left: string,
    delay: number
}

export default function FloatingShape(props: FloatingShapeProps){
    
    return <div>
        <motion.div className={`absolute rounded-full ${props.color} ${props.size} opacity-20 blur-xl
            ${top} ${props.left}`}
            style={{
                top: props.top,
                left: props.left,
                animationDelay: `${props.delay}`
            }}
            animate={{
                y: ["0%", "100%", "0%"],
                x: ["0%", "100%", "0%"],
                rotate: [0, 360]
            }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            }}
            aria-hidden="true"
            >

        </motion.div>
    </div>
}