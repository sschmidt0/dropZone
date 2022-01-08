import { StyledBox } from '../styles/LoginBox.styles';
import { ButtonOutlined } from './ButtonOutlined';

export const LoginBox = () => {
  const handleClick = () => {
    console.log('logged in');
  };

  return (
    <StyledBox>
      <h4>Bienvenido a DDrop</h4>
      <p>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</p>
      <ButtonOutlined method={ handleClick } text="Login con Google" />
    </StyledBox>
  );
};
