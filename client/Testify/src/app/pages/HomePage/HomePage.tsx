import styles from './HomePage.module.scss'
import { useAuthContext } from '../../context/authContext';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gerbIcon from './../../../icons/gerbIcon.png'

interface IHomeProps {
    setReadyToTest: Dispatch<SetStateAction<boolean>>,
    readyToTest: boolean
}

const HomePage: React.FC<IHomeProps> = ({ setReadyToTest }) => {

    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (authUser === null) {
            navigate("/auth")
        } else {
            return
        }
    }, [authUser])
    

    const readyHandler = () => {
        setReadyToTest(true)
        navigate("/test")
    }

    return (
        <section className={styles.window}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.7}} className={styles.logo}>
                <img src={gerbIcon} alt="" width={90} height={50}/>
            </motion.div>
            {authUser && <motion.h1 initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>{authUser.login}, вы можете пройти тест</motion.h1>}
            <motion.button initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} whileTap={{ opacity: 0.5}} onClick={readyHandler} className={styles.btn}>Пройти тест</motion.button>
        </section>
    )
}




export default HomePage;