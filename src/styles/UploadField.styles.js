import styled from 'styled-components';

export const BorderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 60px;
  box-shadow: 1px 1px 50px #6AB972;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    height: 560px;
    margin-bottom: 0;
  }
`;

export const StyledField = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #130F26;
  border-radius: 5px;

  p {
    font-size: 17px;
    text-transform: uppercase;
    z-index: 1;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  img {
    position: absolute;
    width: 30px;
  }

  .vue {
    top: 26%;
    left: 40%;
  }

  .git {
    top: 16%;
    left: 70%;
  }

  .sass {
    top: 7%;
    left: 90%;
  }

  .typescript {
    top: 80%;
    left: 34%;
  }

  .php {
    top: 75%;
    left: 66%;
  }

  .mysql {
    top: 82%;
    left: 7%;
  }

  .python {
    top: 55%;
    left: 91%;
  }

  .css {
    top: 30%;
    left: 20%;
  }

  .tf {
    top: 8%;
    left: 5%;
  }

  .nkube {
    top: 30%;
    left: 93%;
  }
`;
