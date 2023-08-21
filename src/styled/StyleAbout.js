import { keyframes, styled } from "styled-components";
import about_bg from "../img/about_bg.png";

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

export const Section2 = styled.div`
  position: relative;
  width: 100%;
  height: 940px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${about_bg});

  &.animate {
    .center {
      animation: ${slideIn} 1.5s forwards;
    }
  }

  .center {
    width: 900px;
    height: 500px;
    background: #f9f9f9;
    box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);
    -webkit-box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);
    -moz-box-shadow: 12px 12px 7px -2px rgba(49, 49, 49, 0.44);

    hr {
      width: 750px;
      height: 2px;
      background: #e2e1e8;
      border: none;
      margin-bottom: 25px;
    }

    .inner {
      display: flex;
      align-items: center;
      margin-left: 6rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1200px) {
    .center {
      width: 800px;
    }
  }

  @media (max-width: 768px) {
    height: 840px;

    .center {
      width: 600px;
      height: 400px;

      hr {
        width: 500px;
      }

      .inner {
        margin-top: -5px;
        margin-left: 5rem;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 600px) {
    height: 650px;

    .center {
      width: 450px;
      height: 300px;

      hr {
        width: 400px;
        margin-top: -5px;
      }

      .inner {
        margin-left: 3rem;
        font-size: 1rem;
        margin-top: -10px;
      }
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 30px;
  color: #878787;
  font-size: 1.7rem;
  margin-left: 45rem;
  font-family: var(--title-font);

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    margin-left: 41rem;
  }

  @media (max-width: 768px) {
    margin-left: 28rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-left: 20.5rem;
    margin-top: 20px;
  }
`;

export const Name = styled.h1`
  margin-top: 25px;
  margin-bottom: 30px;
  color: #271f45;
  font-size: 2.5rem;
  margin-left: 6rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5rem;
  }

  @media (max-width: 600px) {
    margin-left: 3.5rem;
    margin-top: -20px;
    font-size: 1.8rem;
  }
`;

export const P = styled.p`
  margin-bottom: 38px;
  color: #271f45;
  font-size: 1.15rem;
  margin-left: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 25px;
    margin-left: 5rem;
  }

  @media (max-width: 600px) {
    margin-left: 3.5rem;
    margin-top: 10px;
    font-size: 1rem;
  }
`;
