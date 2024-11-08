import { FC } from "react";
import styles from './Layout.module.scss'
import { Outlet, Link } from "react-router-dom";

const Layout: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    Testify
                </div>
                <nav>
                    <Link to={"/"}>Главная</Link>
                    <Link to={"/auth"}>Авторизация</Link>
                </nav>
            </header>
            <div className={styles.container}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;