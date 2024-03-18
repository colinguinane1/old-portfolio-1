import { motion } from "framer-motion"

const Backdrop = ({ children, onClick }) => {
    
    return(
       <motion.div className='backdrop' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}></motion.div>
    
    )
}

export default Backdrop