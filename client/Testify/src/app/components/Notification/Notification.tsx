import { FC, useEffect } from "react";
import styles from './Notification.module.scss'
import { useNotification } from "../../zustand/useNotification";
import { motion } from "framer-motion";


interface INotificationProps {
    status?: "error" | "warning" | "success"
}


export const Notification: FC<INotificationProps> = ({status}) => {

    const { notification, setNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setNotification({status: "success", text: ""})
        }, 3000);
    }, [])

    const errorBorder: string  = "0.7px solid red"
    const errorText: string = "red"
    const successBorder: string = "0.7px solid #06D001"
    const successText: string = "#06D001"

    return (
        <motion.div style={{border: status === "error" ? errorBorder : successBorder, color: status === "error" ? errorText : successText}} initial={{opacity: 0, y: -30, scale: 0.8}} transition={{duration: 0.3}} animate={{opacity: 1, y: 0, scale: 1}} exit={{opacity: 0, y: -30, scale: 0.8}} className={styles.notification}>
            {notification?.text}
        </motion.div>
    )
}