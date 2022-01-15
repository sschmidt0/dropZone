import { GoogleLogin } from 'react-google-login';
import GoogleVec from '../img/Google.svg';
// import { ButtonOutlined } from './ButtonOutlined';

export const GoogleLogIn = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  console.log(process.env.REACT_APP_GOOGLE_CLIENTID);
  console.log('hola');

  return (
    <GoogleLogin
      clientId="119334274119-9th641481rdtaeidv8m85gokd4k736bd.apps.googleusercontent.com"
      // render={renderProps => (
      //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
      //     <img src={ GoogleVec } alt="Google symbol" />
      //     <span>Login con Google</span>
      //   </button>
      // )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      className="login-button"
    >
      <img src={ GoogleVec } alt="Google symbol" />
      <span>Login con Google</span>
    </GoogleLogin>
  );
};
