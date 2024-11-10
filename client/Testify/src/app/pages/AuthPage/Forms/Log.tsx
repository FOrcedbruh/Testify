import { Dispatch, FC, SetStateAction } from "react";
import styles from './../AuthPage.module.scss'
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { login } from "../../../../api/auth/AuthHandlers";
import { useAuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../zustand/useNotification";



interface IFormState {
    login: string,
    password: string
}

interface ILogProps {
    setForm: Dispatch<SetStateAction<boolean>>
}


export const Log: FC<ILogProps> = ({ setForm }) => {

    const { setAuthUser } = useAuthContext()
    const navigate = useNavigate()
    const { setNotification } = useNotification()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid
        }
    } = useForm<IFormState>({"mode": "onChange"})


    const onSubmit = async (data: IFormState) => {
        const res = await login(data.login, data.password)
        if (res._id) {
            localStorage.setItem("auser", JSON.stringify(res))
            //@ts-ignore
            setAuthUser(res)
            navigate("/")
            reset()
            setNotification({
                status: "success",
                text: "Успешный вход"
            })
        } else {
            setNotification({
                status: "error",
                text: res
            })
        }
    }

    return (
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 20}} className={styles.reg}>
            <motion.h1 initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3}}>Вход</motion.h1>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <motion.input whileFocus={{scale: 1.1}} placeholder="Логин" type="text" {...register("login", {
                    required: "Поле обязательно"
                })}/>
                <motion.input whileFocus={{scale: 1.1}} placeholder="Пароль" type="password" {...register("password", {
                    required: "Пароль обязателен",
                    minLength: {
                        value: 4,
                        message: "Минимум 4 символа"
                    }
                })}/>
                <button disabled={!isValid} style={{"opacity": isValid ? 1 : 0.2, "cursor": isValid ? "pointer" : "not-allowed"}} type="submit" className={styles.btn}>Войти</button>
                <p>Еще нет аккаунта? <span onClick={() => setForm(false)}>Создать</span></p>
            </form>
        </motion.div>
    )
}