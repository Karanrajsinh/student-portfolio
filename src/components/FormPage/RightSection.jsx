// import React from 'react';
import { useForm } from 'react-hook-form';
import Error  from './Error';
import styles from '../../styles/FormPage/RightSection.module.css';
import { useUserDetails } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import btnstyles from '../../styles/FormPage/FormPage.module.css'

const RightSection = () => {

  const navigate = useNavigate();
  const { setDetails, userDetails } = useUserDetails();
  const {register ,handleSubmit ,formState: { errors } } = useForm({defaultValues : userDetails});


  function onSubmit(data)
  {
    setDetails(data)
    navigate('/profile')
  }

  return (
    <section className={styles.Right_Section}>
      <form className={styles.Form_Section}>
        <div className={styles.details}>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="fullName" {...register('name',{required: 'This Field Cannot Be Empty',pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'This Field Must Contain Only Letters'
            }})} className={styles.input} />
          {errors.fullName && <Error>{errors.fullName.message}</Error>}
        </div>

        <div className={styles.details}>
          <label htmlFor="mail">Email Id</label>
          <input type="email" id="mail" {...register('email',{required: 'This Field Cannot Be Empty',pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid E-mail Address'
            }})} className={styles.input} />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className={styles.details}>
          <label htmlFor="number">Phone Number</label>
          <input type="tel"  id="number" {...register('phone', {
            required: 'This Field Cannot Be Empty',
            pattern: {
              value: /^[0-9]*$/,
              message: 'Phone number must contain only numbers'
            },
            minLength: {
              value: 9,
              message: 'Phone number must be at least 9 digits'
            },
            maxLength: {
              value: 15,
              message: 'Phone number must not exceed 15 digits'
            }
          })} className={styles.input} />
          {errors.phone && <Error>{errors.phone.message}</Error>}
        </div>

        <div className={styles.details}>
          <label htmlFor="full-name">Degree</label>
          <input type="text" id="degree" {...register('degree',{required: 'This Field Cannot Be Empty',pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'This Field Must Contain Only Letters'
            }})} className={styles.input} />
          {errors.degree && <Error>{errors.degree.message}</Error>}
        </div>

        <div className={styles.details}>
          <label htmlFor="full-name">University/College</label>
          <input type="text" id="university" {...register('university',{required: 'This Field Cannot Be Empty',pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'This Field Must Contain Only Letters'
            }})} className={styles.input} />
          {errors.university && <Error>{errors.university.message}</Error>}
        </div>

        <button className={`${styles.Details_Submit} ${btnstyles.button}`} type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default RightSection;
