// import React from "react"
import styles from '../../styles/FormPage/error.module.css'

function Error(children) {
    return (
        <span className={styles.error}> 
            {children.children}
        </span>
    )
}

export default Error
