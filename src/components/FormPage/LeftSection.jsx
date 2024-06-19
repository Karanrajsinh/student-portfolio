import { useUserDetails } from '../../context/UserContext';
import styles from '../../styles/FormPage/LeftSection.module.css';
import btnstyles from '../../styles/FormPage/FormPage.module.css'

const LeftSection = () => {
  const {userImage ,setImage} = useUserDetails()
  const handleFileUpload = (event) => {
    
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  localStorage.setItem('img',JSON.stringify(userImage))
  return (
    <section className={styles.Left_Section}>
      <div className={styles.Upload_Img_Section}>
        <div className={styles.Profile_Img}>
          <img id="displayImage" src={userImage}  alt="Profile" />
        </div>
        <button id="uploadButton" className={`${styles.Img_Submit} ${btnstyles.button}`}  onClick={() => document.getElementById('imageInput').click()}>
          <input id="imageInput" className={styles.hiddenInput} type="file" onChange={handleFileUpload} accept="image/*" />
          Upload Your Image
        </button>
      </div>
    </section>
  );
}

export default LeftSection;

