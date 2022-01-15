import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h4 {
    font-size: 20px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      font-size: 34px;
    }
  }

  p {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 2px solid #39424E;

    @media screen and (min-width: 768px) {
      padding-bottom: 60px;
      margin-bottom: 60px;
    }
  }

  .login-button {
    position: relative;
    width: 100%;
    padding: 10px 5px;
    color: #fff;
    background-color: #130F26;
    border: 1px solid #fff;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;

    img {
      position: absolute;
      top: 5px;
      left: 15px;
    }

    span {
      margin-left: 20px;
    }
  }
`;
