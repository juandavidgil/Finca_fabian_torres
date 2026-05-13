import { motion } from "motion/react";

function Reveal({
    children,
    delay = 0,
    y = 80,
    duration = 0.9
}) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            viewport={{
                once: true,
                amount: 0.2
            }}

            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;