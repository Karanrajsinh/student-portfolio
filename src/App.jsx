import ProfilePage from './Pages/ProfilePage'
import FormPage from './Pages/FormPage'
import LandingPage from './Pages/LandingPage'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import styles from "./styles/UiComponent/Toast.module.css"
import DashBoardPage from './Pages/DashBoardPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedAuthRoute from './components/ProtectedAuthRoute'
import ProtectedRoute from './components/ProtectedRoute'



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60*1000,
    }
  }
})

function App() { 

  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>,
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'profile',
      element:
      <ProtectedAuthRoute>
        <Outlet/>
      </ProtectedAuthRoute>,
      children:
      [
        {
          index:true,
          // path:"form",
          element:<FormPage/>
        },
        {
          path:"create",
          element:<ProfilePage/>
        }
      ]
    },
    {
      path:"/dashboard",
      element :
      <ProtectedRoute>
        <Outlet/>
      </ProtectedRoute>,
      children:[
        {
          index:true,
          element:<DashBoardPage/>
        }
      ]
    }
  ])
  
  return (
    <QueryClientProvider client={queryClient}> 
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  )
  // return(<FormPage/>)
}

export default App


