import { useNavigate } from 'react-router-dom';
import { useUserDetails } from '../../context/UserContext';
import styles from '../../styles/ProfilePage/DetailsSection.module.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import supabase from '../../services/supabase'


const DetailsSection = () => {
  
  const navigate = useNavigate();
  const {userDetails,setIsLoading } = useUserDetails();
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  useEffect(()=>
  {
    if(isEmpty(userDetails)) navigate(-1);
  },[])

  function onClick(){
    navigate('/form');
  }

 
  async function createUser()
  {
    setIsLoading(true);
  try {
  const { data, error } = await 
  supabase.from('User Details')
  .insert([userDetails])
  .select()
  if(error) {
    setIsLoading(false)
    console.log(error),
    toast.error('profile was not created due to an error')
  }
  if(data) {
    setIsLoading(false)
    console.log('sucessfull'),
    toast.success('Profile Was Created Successfully')
  }
  
  return data;
  
} catch (error) {
  toast.error('profile was not created due to an error')
  console.log("catched error",error)
  setIsLoading(false)
}
}

  return(
  <section className={styles.detailsSection}>
    <header className={styles.detailsSectionHeader}>
      Details
    </header>
    <hr className={styles.detail_divider} />
    <div className={styles.detailsList}>
      <div className={styles.details}>
        <p>E-mail</p>
        <p>{userDetails?.email}</p>
      </div>
      <div className={styles.details}>
        <p>Phone No.</p>
        <p>{userDetails?.phone}</p>
      </div>
      <div className={styles.details}>
        <p>Degree</p>
        <p>{userDetails?.degree}</p>
      </div>
      <div className={styles.details}>
        <p>University</p>
        <p>{userDetails?.university}</p>
      </div>
      <div className={styles.details}>
        <button className={`${styles.DetailsButton} ${styles.PreviousButton}`} onClick={onClick}><FaArrowLeftLong />

        Back </button>
        <button className={styles.DetailsButton} onClick={createUser}>Confirm</button>
      </div>
    </div>
  </section>);
};

export default DetailsSection;
