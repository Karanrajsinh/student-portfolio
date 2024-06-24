import { useNavigate } from "react-router-dom";
import HeroSection from "../components/LandingPage/HeroSection";
import ImgSection from "../components/LandingPage/ImgSection";
import Navbar from "../components/LandingPage/Navbar";
import { useUserDetails } from "../context/UserContext";
import styles from '../styles/LandingPage/LandingPage.module.css';
import supabase from "../services/supabase";
import { useEffect } from "react";

function App() {
    
    const {newUser,getData} = useUserDetails()
    const navigate = useNavigate();
    useEffect(()=>
        {
            getData();
        },[getData])
    function reDirectTo ()
    {
        supabase.auth.onAuthStateChange((event)=>
        {
            if(event !== "SIGNED_OUT")
            {
                console.log(event)
                if(newUser === false) navigate('/dashboard')
                if(newUser === true) navigate('/login/form');
            }
        })
    }
    reDirectTo();

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
