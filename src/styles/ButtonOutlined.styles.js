import styled from 'styled-components';

export const StyledButton = styled.button`
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
`;
