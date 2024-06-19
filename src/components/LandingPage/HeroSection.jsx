
import { Link } from 'react-router-dom';
import styles from '../../styles/LandingPage/HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_text}>
                <h2>Make your portfolio, Show your achievements</h2>
            </div>
            <button className={styles.hero_sign_up_button}><Link to='/login'>Sign Up</Link></button>
        </section>
    );
};

export default HeroSection;
