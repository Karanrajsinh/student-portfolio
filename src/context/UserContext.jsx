import { createContext, useContext, useState } from "react";



const UserContext = createContext();


function UserDetailsProvider({children}) {
    const DEFAULT_URL = "https://cdn.builder.io/api/v1/image/assets/TEMP/76a78dfd13796c9f7c4fc2ca2666eee22ce1c5c6bf7e1ebcb1b7cb06b81d0a1b?apiKey=8443185ec024486c9c31dc7724ae2210"
    const [userImage, setUserImage] = useState(DEFAULT_URL);
    const [userDetails, setUserDetails] = useState({});
    const [isLoading , setIsLoading] = useState(false);

    function setDetails(data)
    {
        setUserDetails(data)
    }

    function setImage(image)
    {
        setUserImage(image);
    }


    return (
        <UserContext.Provider
            value={{
                userDetails,
                userImage,
                setDetails,
                setImage,
                isLoading,
                setIsLoading 
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
