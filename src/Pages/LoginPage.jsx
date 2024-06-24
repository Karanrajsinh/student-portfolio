import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styles from '../styles/LoginPage/LoginPage.module.css'
import supabase from '../services/supabase';



function Login() {
    
    return (
    <div className={styles.LoginLayout}>
    <p>Student Portfolio</p>
    <Auth supabaseClient={supabase}  appearance={{
       theme:ThemeSupa,
       style:{
        container:{width:"20em"},
        button:{backgroundColor : '#242424' ,borderColor:"grey" ,borderRadius : '2em' ,color:"white"},
        input:{backgroundColor:"#3d3d3d",borderRadius:"1em"},
        anchor:{textDecoration:"none"},
        divider:{backgroundColor:'#aaaaaa'}
       },
      }} providers={['google']} theme='dark' redirectTo="http://student-portfolio-kv.netlify.app/" />
      </div>)

}

export default Login;