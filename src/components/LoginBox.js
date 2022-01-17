import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin, { GoogleLogout }  from 'react-google-login';
import { UserContext } from './UserContext';
import { StyledBox } from '../styles/LoginBox.styles';
// import { ButtonOutlined } from './ButtonOutlined';

export const LoginBox = () => {
  const navigate = useNavigate();
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useContext(UserContext);

  // const handleClick = () => {
  //   console.log('logged in');
  // };

  const handleLogin = (res) => {
    console.log('Login sucessful', res.profileObj);
    setIsUserLoggedIn(true);
  };

  const handleFailure = (res) => {
    console.log('Login failed', res);
  };

  const handleLogout = () => {
    console.log('Logout successful');
    setIsUserLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    setShowLoginButton(!isUserLoggedIn);
  }, [isUserLoggedIn]);

  return (
    <StyledBox>
      <h4>Bienvenido a DDrop</h4>
      <p>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</p>

      {/* button according to Figma wireframes */}
      {/* <ButtonOutlined method={ handleClick } text="Login con Google" /> */}

      {/* button with login or logout funcionality from Google Account */}
      { showLoginButton ?
        <GoogleLogin
          clientId={ process.env.REACT_APP_GOOGLE_CLIENTID }
          buttonText="Inicia la sesión"
          onSuccess={ handleLogin }
          onFailure={ handleFailure }
          cookiePolicy={'single_host_origin'}
          isSignedIn={ true }
        /> :
        <GoogleLogout
          clientId={ process.env.REACT_APP_GOOGLE_CLIENTID }
          buttonText="Cierra la sesión"
          onLogoutSuccess={ handleLogout }
        />
      }
    </StyledBox>
  );
};
