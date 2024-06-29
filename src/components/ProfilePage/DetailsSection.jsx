import { useNavigate } from 'react-router-dom';
import { useUserDetails } from '../../context/UserContext';
import styles from '../../styles/ProfilePage/DetailsSection.module.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import toast from 'react-hot-toast';
import supabase from '../../services/supabase'
import Spinner from '../Spinner';
import { useEffect } from 'react';



const DetailsSection = () => {
  const navigate = useNavigate();
  const {userDetails,email,isLoading,setIsLoading } = useUserDetails();
  const  details = {email,...userDetails}


  useEffect(()=>
  {
    if(!userDetails.name) navigate('/profile');
  })

  function onClick(){
    navigate('/profile');
  }

  async function createUser()
  {
    setIsLoading(true);
  try {
  const { data, error } = await 
  supabase.from('User Details')
  .insert(details)
  .select()
  if(error) {
    setIsLoading(false)
    console.log(error)
    if(error.code === "23502") error.message = "cannot create profile without an email"
    if(error.code === "23505") error.message = "profile is already created"
    toast.error(error.message)
  }
  if(data) {
    setIsLoading(false)
    toast.success('Profile Was Created Successfully')
    navigate('/dashboard')
  }
  
  return data;
  
} catch (error) {
  toast.error('profile was not created due to an error')
  console.log("catched error",error)
  setIsLoading(false)
}
}



  return(
    <>
    {isLoading && <Spinner message={'Creating Your Profile'}/>}
  <section className={styles.detailsSection}>
    <header className={styles.detailsSectionHeader}>
      Details
    </header>
    <hr className={styles.detail_divider} />
    <div className={styles.detailsList}>
      <div className={styles.details}>
        <p>E-mail</p>
        <p>{details?.email}</p>
      </div>
      <div className={styles.details}>
        <p>Phone No.</p>
        <p>{details?.phone}</p>
      </div>
      <div className={styles.details}>
        <p>Degree</p>
        <p>{details?.degree}</p>
      </div>
      <div className={styles.details}>
        <p>University</p>
        <p>{details?.university}</p>
      </div>
      <div className={styles.details}>
        <button className={`${styles.DetailsButton} ${styles.PreviousButton}`} onClick={onClick}><FaArrowLeftLong />

        Back </button>
        <button className={styles.DetailsButton} onClick={createUser}>Confirm</button>
      </div>
    </div>
  </section>
    </>
  );
};

export default DetailsSection;
