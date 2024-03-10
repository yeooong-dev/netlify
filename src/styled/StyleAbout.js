import { css, keyframes, styled } from "styled-components";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Width = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section2 = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s step;

  &.animate {
    .center {
      animation: ${css`
        ${slideIn} 2s forwards
      `};
    }
  }

  .center {
    width: 80%;
    max-width: 900px;
    height: 500px;
    background: #f9f9f9;
    box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);
    -webkit-box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);
    -moz-box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);

    hr {
      width: 80%;
      max-width: 750px;
      height: 2px;
      background: #e2e1e8;
      border: none;
      margin: 30px auto;
    }

    .inner {
      width: 80%;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      margin: 25px auto;
    }
  }

  @media (max-width: 800px) {
    .center {
      width: 100%;
      height: 430px;
    }
  }

  @media (max-width: 550px) {
    width: 95%;
    .center {
      width: 90%;
      height: 250px;

      hr {
        margin: 15px auto;
      }

      .inner {
        font-size: 14px;
        white-space: normal;
        margin: 10px auto;
      }
    }
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  color: #878787;
  font-size: 1.7rem;
  margin-right: 25px;
  font-family: var(--title-font);
  text-align: right;

  @media (max-width: 550px) {
    font-size: 14px;
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const Name = styled.h1`
  margin-top: 25px;
  margin-bottom: 30px;
  color: #2e2e2e;
  font-size: 2.5rem;
  margin-left: 6rem;

  @media (max-width: 1200px) {
    font-size: 2.1rem;
    margin-top: 25px;
    margin-left: 4.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
    margin-left: 4rem;
  }

  @media (max-width: 800px) {
    font-size: 1.8rem;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 3rem;
  }

  @media (max-width: 600px) {
    margin-left: 3rem;
    margin-top: 50px;
    font-size: 1.8rem;
  }

  @media (max-width: 550px) {
    margin-left: 2rem;
    font-size: 1.4rem;
    margin-top: -5px;
    margin-bottom: 10px;
  }
`;

export const P = styled.p`
  margin-bottom: 38px;
  color: #2e2e2e;
  font-size: 1.15rem;
  margin-left: 6rem;

  @media (max-width: 1200px) {
    margin-left: 4.5rem;
  }

  @media (max-width: 1000px) {
    margin-left: 4rem;
  }

  @media (max-width: 800px) {
    margin-left: 3rem;
    margin-bottom: 25px;
  }

  @media (max-width: 600px) {
    margin-left: 3rem;
    margin-top: -5px;
    font-size: 1.1rem;
  }

  @media (max-width: 550px) {
    margin-left: 2rem;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
