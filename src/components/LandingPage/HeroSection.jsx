
import { Link } from 'react-router-dom';
import styles from '../../styles/LandingPage/HeroSection.module.css';
import { useUserDetails } from '../../context/UserContext';




const HeroSection = () => {

    const {login,newUser} = useUserDetails()
    let link, message;
    const toNavigate = () => {
        if(login && newUser === true) 
        {
            link = '/profile';
            message = 'Create Your Profile'
        }
        if(newUser === false) 
            {
                link = '/dashboard';
                message = 'Dashboard'
            }
        if(!login &&  newUser === undefined)
                {
            link = '/login'
            message = "Sign Up"
        }
    } 

    toNavigate();


    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_text}>
                <h2>Make your portfolio, Show your achievements</h2>
            </div>
            <Link className={`${styles.hero_sign_up_button} ${styles.button}`} to={link}>{message}</Link>
        </section>
    );
};

export default HeroSection;
