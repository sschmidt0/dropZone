import styled from 'styled-components';

export const BorderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 30px;
  padding: 20px;
  background: #6AB972;
  filter: blur(70px);
  transform: matrix(1, 0, 0, -1, 0, 0);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    height: 600px;
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
