import { FC } from "react";
import styles from './../AuthPage.module.scss'
import { useForm } from "react-hook-form";



interface IFormState {
    login: string,
    password: string
}


export const Reg: FC = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<IFormState>({"mode": "onChange"})


    const onSubmit = (data: IFormState) => {
        console.log(data)
        reset()
    }

    return (
        <div className={styles.reg}>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input placeholder="Придумайте логин" type="text" {...register("login", {
                    required: "Поле обязательно"
                })}/>
                <input placeholder="Придумайте пароль" type="password" {...register("password", {
                    required: "Пароль обязателен",
                    minLength: {
                        value: 4,
                        message: "Минимум 4 символа"
                    }
                })}/>
                <button type="submit" className={styles.btn}>Готово</button>
            </form>
        </div>
    )
}