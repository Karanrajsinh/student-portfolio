import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage/LoginPage.module.css'
import supabase from '../services/supabase';




function Login() {

  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)

    })

    return () => subscription.unsubscribe()
  },[session])

  if (session === null) {
    return (
    <div className={styles.LoginLayout}>
    <p>Student Portfolio</p>
    <Auth supabaseClient={supabase} appearance={{
       theme:ThemeSupa,
       style:{
        container:{width:"20em"},
        button:{backgroundColor : '#242424' ,borderColor:"grey" ,borderRadius : '2em' ,color:"white"},
        input:{backgroundColor:"#3d3d3d",borderRadius:"1em"},
        anchor:{textDecoration:"none"},
        divider:{backgroundColor:'#aaaaaa'}
       },
      }} providers={['google']} theme='dark' redirectTo='http://localhost:5173/form' />
      </div>)
  }
  else {
   navigate('/form');
   
  }
}



export default Login;