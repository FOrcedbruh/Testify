import { FC } from "react";
import styles from './Layout.module.scss'
import { Outlet, Link } from "react-router-dom";
import gerbIcon from './../../../../public/icons/gerbIcon.png'
import { motion } from "framer-motion";
import { useAuthContext } from "../../context/authContext";

interface ILayoutProps {
    readyToTest: boolean
}


const Layout: FC<ILayoutProps> = ({ readyToTest }) => {


    const { authUser } = useAuthContext()

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    {readyToTest && <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.5}} src={gerbIcon} alt="" width={70} height={35}/>}
                </div>
                <nav>
                    {authUser !== null && <Link to={"/"}>Главная</Link>}
                    {authUser === null && <Link to={"/auth"}>Авторизация</Link>}
                </nav>
            </header>
            <div className={styles.container}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;