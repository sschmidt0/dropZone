import { GoogleLogout } from 'react-google-login';

export const GoogleLogOut = ({ setIsLogged }) => (
  <GoogleLogout
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={ () => setIsLogged(false) }
  />
);
