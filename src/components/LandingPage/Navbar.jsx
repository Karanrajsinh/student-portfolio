import styles from '../../styles/LandingPage/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left_side}>
                <a href="#">Student Portfolio</a>
            </div>
            <div className={styles.right_side}>
                <a href="#">About</a>
                {/* <button className={styles.nav_sign_up_button}>Sign Up</button> */}
            </div>
        </nav>
    );
};

export default Navbar;
