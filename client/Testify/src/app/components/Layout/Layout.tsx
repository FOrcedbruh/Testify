import { FC } from "react";
import styles from './Layout.module.scss'
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (
        <>
            <header className={styles.header}>

            </header>
            <div className={styles.container}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;