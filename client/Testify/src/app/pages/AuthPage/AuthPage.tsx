import { FC, useState } from "react";
import styles from './AuthPage.module.scss'
import { Reg } from "./Forms/Reg";
import { Log } from "./Forms/Log";
import { AnimatePresence } from "framer-motion";

const AuthPage: FC = () => {

    const [form, setForm] = useState<boolean>(false)

    return (
        <section className={styles.window}>
            <AnimatePresence>
                {!form ? <Reg setForm={setForm} /> : <Log setForm={setForm}/>}
            </AnimatePresence>
        </section>
    )
}


export default AuthPage;