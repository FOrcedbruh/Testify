import styles from './HomePage.module.scss'
import { useAuthContext } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const HomePage: React.FC = () => {

    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!authUser) {
            navigate("/auth")
        }
    }, [])

    return (
        <section className={styles.window}>
            Home
        </section>
    )
}




export default HomePage;