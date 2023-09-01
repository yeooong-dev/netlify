import styled, { keyframes } from "styled-components";

const slideFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Section6 = styled.div`
  width: 85%;
  height: 1700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #32324b;
  border-radius: 0 0 30px 30px;

  h1 {
    font-size: 3rem;
    font-family: var(--title-font);
    margin: 3rem;
    color: #f6f6f6;
  }

  @media (max-width: 1200px) {
    height: 1550px;
  }

  @media (max-width: 1000px) {
    height: 1800px;
  }

  @media (max-width: 750px) {
    height: 1800px;
  }
`;

export const Con = styled.div`
  width: 1050px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f6f6f6;
  margin-bottom: 50px;
  border-radius: 25px;

  h3 {
    font-size: 2.3rem;
    font-weight: bold;
    font-family: TheJamsil5Bold;
    color: #2e2e2e;
    margin-top: 80px;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: #dba058;
    font-size: 1.1rem;
  }

  .team {
    font-size: 1.1rem;
    color: gray;
    margin-top: -20px;
  }

  img {
    width: 580px;
    margin-right: 30px;
  }

  .center {
    width: 85%;
    display: flex;
    align-items: center;
    margin-bottom: 80px;
  }

  .ment {
    line-height: 1.8rem;
  }

  .skills {
    line-height: 1.5rem;
    margin-bottom: 30px;
  }

  .front {
    line-height: 1.5rem;
  }

  &.hidden-left {
    transform: translateX(-100%);
  }

  &.hidden-right {
    transform: translateX(100%);
  }

  &.animate-first {
    animation: ${slideFromLeft} 2s forwards;
  }
  &.animate-second {
    animation: ${slideFromRight} 2s forwards;
  }

  @media (max-width: 1400px) {
    width: 920px;

    img {
      width: 450px;
    }

    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px) {
    width: 740px;

    img {
      width: 350px;
    }
  }

  @media (max-width: 1000px) {
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 430px;
      margin-right: -5px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 23px;
      margin-top: 90px;
    }

    .center {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    width: 450px;
    height: 730px;

    img {
      width: 380px;
    }

    h3 {
      font-size: 1.6rem;
      margin-top: 110px;
      margin-bottom: 23px;
    }
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 730px;

    img {
      width: 250px;
    }
  }
`;

export const Margin = styled.div`
  width: 100%;
  height: 200px;
`;
