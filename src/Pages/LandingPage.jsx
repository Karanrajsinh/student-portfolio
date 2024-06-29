import HeroSection from "../components/LandingPage/HeroSection";
import ImgSection from "../components/LandingPage/ImgSection";
import Navbar from "../components/LandingPage/Navbar";
import styles from '../styles/LandingPage/LandingPage.module.css';

function App() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <HeroSection />
                <ImgSection />
            </main>
        </>
    );
}

export default App;
