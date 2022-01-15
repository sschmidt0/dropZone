// import { useState } from 'react';
// import GoogleLogin from 'react-google-login';
import { StyledBox } from '../styles/LoginBox.styles';
// import { GoogleLogOut } from './GoogleLogOut';
import { ButtonOutlined } from './ButtonOutlined';

export const LoginBox = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    console.log('logged in');
  };

  return (
    <StyledBox>
      <h4>Bienvenido a DDrop</h4>
      <p>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</p>
      <ButtonOutlined method={ handleClick } text="Login con Google" />
      {/* { isLoggedIn ? <GoogleLogOut method={ setIsLoggedIn } /> : <GoogleLogin /> } */}
    </StyledBox>
  );
};
