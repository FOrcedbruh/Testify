import { FC, useState } from "react";
import styles from './AuthPage.module.scss'
import { Reg } from "./Forms/Reg";

const AuthPage: FC = () => {

    const [form, setForm] = useState<boolean>(false)

    return (
        <section className={styles.window}>
            {!form ? <Reg /> : <></>}
        </section>
    )
}


export default AuthPage;