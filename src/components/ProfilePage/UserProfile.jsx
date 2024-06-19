import { useUserDetails } from '../../context/UserContext';
import styles from '../../styles/ProfilePage/UserProfile.module.css';

const UserProfile = () =>{ 

  const {userImage ,userDetails} = useUserDetails();
  return (
  <section className={styles.userProfileLogo}>
    <img
      className={styles.userImg}
      src= {userImage}
      alt="User"
    />
    <p className={styles.profileName}>{userDetails?.name}</p>
  </section>
);
}

export default UserProfile;
