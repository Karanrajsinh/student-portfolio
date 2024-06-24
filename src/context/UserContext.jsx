import { createContext, useContext,  useState } from "react";
import supabase from "../services/supabase";
import img from '../../public/Img/user2.jpg'

const UserContext = createContext();


function UserDetailsProvider({children}) {
    const DEFAULT_URL = img;
    const [userImage, setUserImage] = useState(DEFAULT_URL);
    const [userDetails, setUserDetails] = useState({});
    const [isLoading , setIsLoading] = useState(false);
    const [login,setLogin] = useState(false);
    const [email ,setEmail] = useState("");
    const [userID , setUserID] = useState("");
    const [newUser , setNewUser] = useState();


    
    
    async function getData()
    {
        const {data} = await supabase.auth.getUser()
        setLogin(Boolean(data.user))
        if(data.user)
            {
                setEmail(data.user.email)
                setUserID(data.user.id)
                supabase.from("User Details").select('*').eq("user_id",data.user.id).then(({data})=>
                {
                    const isNew = Boolean(!data[0]?.created_at)
                    return setNewUser(isNew)
                })
            }
    }

    
    function setDetails(data)
    {
        setUserDetails(data)
    }
    
    function setImage(image)
    {
        setUserImage(image);
    }
    async function getUserDetails()
    {
       let {data ,error} = await supabase.from("User Details").select('*').eq("user_id",userID)
       if(error) console.log(error.message)
       if(data) return data
    }
    

    return (
        <UserContext.Provider
            value={{
                userID,
                setUserID,
                login,
                setLogin,
                email,
                setEmail,
                userDetails,
                getUserDetails,
                userImage,
                setDetails,
                setImage,
                isLoading,
                setIsLoading,
                newUser ,
                setNewUser,
                getData
            }}
         >
            {children}
        </UserContext.Provider>
        )
}

function useUserDetails()
{
    const context = useContext(UserContext);
    return context;
}

/*eslint-disable */
export  {UserDetailsProvider , useUserDetails};
