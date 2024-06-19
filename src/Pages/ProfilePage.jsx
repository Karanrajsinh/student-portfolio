import DetailsSection from "../components/ProfilePage/DetailsSection"
import Navbar from "../components/ProfilePage/Navbar"
import UserProfile from "../components/ProfilePage/UserProfile"
import { useUserDetails } from "../context/UserContext"
import styles from  '../styles/ProfilePage/ProfilePage.module.css'
import Spinner from '../components/Spinner'

function ProfilePage() {

    const {isLoading} = useUserDetails()


    return (
    <>
    {isLoading && <Spinner message={'Creating Your Profile'}/>}
    <Navbar/>
    <main className={styles.main}>
    <UserProfile/>
    <DetailsSection />
    </main>
    </>
    )
}

export default ProfilePage