import styled from 'styled-components';

export const StyledErrorDiv = styled.div`
  width: 60%;
  margin: auto;
  padding: 20px;
  background: #232730;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', sans-serif;
  z-index: 9;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-transform: initial;
    margin-bottom: 40px;
  }

  button {
    width: 120px;
    padding: 10px;
  }
`;
