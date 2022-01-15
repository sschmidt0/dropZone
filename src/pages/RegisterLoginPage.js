import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import '../styles/RegisterLoginPage.scss';
import { validateInput } from '../assets/validateInput';

export const RegisterLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const buttonText = location.pathname !== '/iniciar' ? 'Regístrate' : 'Inicia la sesión';
  const preText = location.pathname === '/iniciar' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?';
  const linkDestination = location.pathname === '/iniciar' ? '/' : '/iniciar';
  const linkText = location.pathname === '/iniciar' ? 'Regístrate' : 'Inicia la sesión';

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
  }

  return (
    <div className="container">
      <div className="form-container">
        <GoogleLogin />
        <div className="form-separate">
          <p>o</p>
        </div>
        <form noValidate autoComplete="off">
          {/* username */}
          <label for="username">Nombre de usuario</label>
          <input
            id="username"
            name="username"
            autoFocus
            value={ userName }
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>{ errors.userName }</span>
          {/* email */}
          <label for="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
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
