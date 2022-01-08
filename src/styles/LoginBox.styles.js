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
`;
