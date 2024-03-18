import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
    y: "-100vh",
    opacity: 0,
    },
    visible: {
    y: "0",
    opacity: 1,
    transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffnesss: 500,
    }
    },
    exit: {
    y: "100vh",
    opacity: 0,
    },
}

const Modal = ({ handleClose, text}) => {
    <Backdrop onClick={handleClose}>
<motion.div
onClick={(e) => e.stopPropagation()}
className="modal orange-gradient"
variants={dropIn}
>

</motion.div>

    </Backdrop>
};

export default Modal;