import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={[isUserLoggedIn, setIsUserLoggedIn]}>
      { props.children }
    </UserContext.Provider>
  )
};
