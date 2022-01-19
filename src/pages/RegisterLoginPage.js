import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import GoogleLogin from 'react-google-login';
import '../styles/RegisterLoginPage.scss';
import { validateInput } from '../assets/validateInput';

export const RegisterLoginPage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useContext(UserContext);
  const [userAccessToken, setUserAccessToken] = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const buttonText = location.pathname !== '/iniciar' ? 'Regístrate' : 'Inicia la sesión';
  const preText = location.pathname === '/iniciar' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?';
  const linkDestination = location.pathname === '/iniciar' ? '/' : '/iniciar';
  const linkText = location.pathname === '/iniciar' ? 'Regístrate' : 'Inicia la sesión';

  const handleLogin = (res) => {
    console.log('userAccessToken before', userAccessToken);
    console.log('typeof accessToken', typeof userAccessToken);
    console.log('resp accessToken: ', res.accessToken);
    console.log('typeof res.accessToken', typeof res.accessToken);
    console.log('Login sucessful', res.profileObj);
    // setUserAccessToken(res.accessToken);
    setUserAccessToken('hola');
    console.log('userAccessToken afterwards: ', userAccessToken);
    setIsUserLoggedIn(true);
    location.pathname === 'iniciar' ? navigate('/../dropzone') : navigate('/dropzone');
  };

  const handleFailure = (res) => {
    console.log('Login failed', res);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      userName,
      email
    };

    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      navigate('dropzone');
    }
  };

  useEffect(() => {
    isUserLoggedIn && navigate('dropzone');
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <GoogleLogin
          clientId={ process.env.REACT_APP_GOOGLE_CLIENTID }
          buttonText={ buttonText }
          onSuccess={ handleLogin }
          onFailure={ handleFailure }
          cookiePolicy={'single_host_origin'}
          isSignedIn={ true }
        />
        <div className="form-separate">
          <p>o</p>
        </div>

        {/* simulate user login or register */}
        <form noValidate autoComplete="off">
          {/* username */}
          <label html="username">Nombre de usuario</label>
          <input
            id="username"
            name="username"
            autoFocus
            value={ userName }
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>{ errors.userName }</span>
          {/* email */}
          <label html="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            inputMode='email'
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>{ errors.email }</span>
          <button onClick={ handleClick }>{ buttonText }</button>
        </form>
        <p>{ preText } <Link to={ linkDestination }>{ linkText }</Link></p>
      </div>
    </div>
  )
}
