import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../services/supabase";

function ProtectedRoute({children}) {

    const navigate = useNavigate();
    useEffect(()=>
    {
        supabase.auth.getUser().then(({data})=>
        {
            console.log(data.user)
            if(!data.user) navigate('/login')
        })
    },[navigate])




    return children;
}

export default ProtectedRoute
