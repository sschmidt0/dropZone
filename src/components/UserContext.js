import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userAccessToken, setUserAccessToken] = useState('');

  return (
    <UserContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn, userAccessToken, setUserAccessToken}}>
      { props.children }
    </UserContext.Provider>
  )
};
