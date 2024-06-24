import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../context/UserContext";
import { useEffect } from "react";

function ProtectedRoute({children}) {
    const {newUser,login,userID,getData,email} = useUserDetails();
    const navigate = useNavigate();
    
    getData();
    useEffect(()=>
    {
        console.log(newUser , login , userID)
        if(userID && login && newUser === false) navigate('/dashboard');
    
        if(newUser === true && login) navigate('/login/form')   
        if(userID === "" && email === '') navigate('/login')
    },[newUser,userID,email,login,navigate])

    return children
}

export default ProtectedRoute
