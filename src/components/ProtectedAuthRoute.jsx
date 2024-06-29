import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../services/supabase";
import { useUserDetails } from "../context/UserContext";

function ProtectedAuthRoute({children}) {
    const navigate = useNavigate();
    const {newUser} = useUserDetails();
    useEffect(()=>
        {
            supabase.auth.getUser().then(({data})=>
            {
                if(data.user && newUser === false) navigate('/dashboard')
                if(!data.user) navigate('/login')
            })
        })
    return children
}

export default ProtectedAuthRoute
