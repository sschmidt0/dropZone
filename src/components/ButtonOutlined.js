import { StyledButton } from '../styles/ButtonOutlined.styles';
import GoogleVec from '../img/Google.svg';

export const ButtonOutlined = ({ text, method }) => (
  <StyledButton onClick={ method }>
    <img src={ GoogleVec } alt="Google symbol" />
    <span>{ text }</span>
  </StyledButton>
);
