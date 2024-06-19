import ProfilePage from './Pages/ProfilePage'
import FormPage from './Pages/FormPage'
import LandingPage from './Pages/LandingPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { UserDetailsProvider } from './context/UserContext'
import Login from './Pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import styles from "./styles/UiComponent/Toast.module.css"

function App() { 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>,
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/form',
      element:<FormPage/>,
    },
    {
      path:'/profile',
      element:<ProfilePage/>,
    }
  ])
  
  return (
    <>
    <UserDetailsProvider>

    <RouterProvider  router={router}/>
    <Toaster gutter={12} toastOptions={{
      className:`${styles.Login}`,
      style:{
        borderRadius:"1em",
        backgroundColor:"#242424",
        color:"white",
        border:"1px solid rgba(255, 255, 255, 0.404)",
      }
    }} containerStyle={{margin:"16px"}}/>
    </UserDetailsProvider>
    </>
  )
  // return(<FormPage/>)
}

export default App


