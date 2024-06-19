import { ImSpinner8 } from "react-icons/im";
import styles from '../styles/UiComponent/spinner.module.css'

function Spinner({message}) {
    return (
        <div className={styles.spinnerContainer}>
            <ImSpinner8 className={styles.spinner}/>
            <p>{message}</p>
        </div>
    )
}

export default Spinner
