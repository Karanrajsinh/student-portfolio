import supabase from "../services/supabase"
import { useUserDetails } from "../context/UserContext"
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import getUser from "../services/getUser";

function DashBoardPage() {

    const { userID , setEmail , setIsLoading ,  isLoading ,setLogin  , setNewUser} = useUserDetails();
    const navigate = useNavigate();


    const {data , isFetching ,error} = useQuery({
        queryKey : ['user'],
        queryFn: () => getUser(userID),
        refetchOnMount: false,
        enabled : userID !== "" || userID === undefined || userID === null
    })
    if (data) console.log(data[0])
        if(error) toast.error("Error in fetching the data")
            function onClick()
        {
        setIsLoading(true)
        supabase.auth.signOut().then((res)=> {
            console.log(res)
            setEmail('');
            setIsLoading(false);
            setLogin(false);
            setNewUser();
            navigate('/');
        });
    }
    return (
        <>
        {(isFetching || isLoading) && <Spinner message={isFetching ? "Fetching Your Data" : "Logging Out"}/>}
        <div>
            {data&& 
            <>
            <p>{data[0].name}</p>
            <p>{data[0].email}</p>
            <p>{data[0].phone}</p>
            <p>{data[0].university}</p>
            </>
            }
           <button onClick={onClick}>Sign Out</button> 
        </div>
        </>
    )
}

export default DashBoardPage
