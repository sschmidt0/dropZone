import { StyledErrorDiv } from '../styles/ErrorMessage.styles';
import '../styles/Button.scss';
// import { ButtonFilled } from './ButtonFilled';

export const ErrorMessage = ({ setIsError }) => (
  <StyledErrorDiv>
    <h3>Ups, algo ha ido mal</h3>
    <p>No hemos podido subir tu archivo, revisa el formato o bien inténtalo de nuevo</p>
    <button onClick={ () => setIsError(false) }>Cerrar</button>
  </StyledErrorDiv>
);
