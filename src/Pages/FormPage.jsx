import LeftSection from "../components/FormPage/LeftSection"
import Navbar from "../components/FormPage/Navbar"
import RightSection from "../components/FormPage/RightSection"
import styles from '../styles/FormPage/FormPage.module.css'

function FormPage() {

    return (
    <>
        <Navbar />
        <main className={styles.main}>
            <LeftSection />
            <hr className={styles.divider} />
            <RightSection  />
        </main>
    </>
    )
}

export default FormPage
