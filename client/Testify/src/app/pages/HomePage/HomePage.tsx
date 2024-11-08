import styles from './HomePage.module.scss'
import { useAuthContext } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const HomePage: React.FC = () => {

    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (authUser === null) {
            navigate("/auth")
        } else {
            return
        }
    }, [authUser])

    return (
        <section className={styles.window}>
            <h1>{authUser.login}, вы можете пройти тест</h1>
        </section>
    )
}




export default HomePage;