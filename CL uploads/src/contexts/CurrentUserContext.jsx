import { useState, useContext, createContext } from "react";
import {useCookies} from 'react-cookie';

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const CurrentUserContext = createContext();

// CurrentUserContext function to provide user data to components
export const CurrentUserHolder = (props) => {

    // Using the react-cookie hook to manage the user cookie
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    // Using useState hook to manage the current user 
    const [currentUser, setUserCurrent] = useState(cookies.userObject ? cookies.userObject : {}); 

    // Function to handle user object and set cookie
    const handleUser = (user) => {
        console.log(user)
        if (user.id) {
            if (user.rememberMe) {
                // Setting user cookie for an undefined period.
                setCookie('userObject', JSON.stringify(user.user), { path: '/' }) 
            }
            else {
                // Setting user cookie for 24 hours
                setCookie('userObject', JSON.stringify(user.user), { path: '/', maxAge: 60 * 60 * 24 * 28 }) 
            }
        } else {
            // If user does not have an id, remove user cookie
            removeCookie('userObject')
        }
        // Setting the current user object
        setUserCurrent(user.user)
    }


    return (
        // Providing the current user and handleUser function to the context object
        <CurrentUserContext.Provider value={{currentUser, handleUser}}>
            {props.children}
        </CurrentUserContext.Provider>
    );
}

export const useCurrentUserContext = () => {
    return useContext(CurrentUserContext);
  };