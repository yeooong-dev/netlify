import { keyframes, styled } from "styled-components";

const sequentialFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Section4 = styled.div`
  position: relative;
  width: 85%;
  height: 1350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#ebebeb"};

  h1 {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 2.5rem;
    font-family: var(--title-font);
    color: #2e2e2e;
  }

  b {
    font-size: 2rem;
    font-family: var(--title-font);
    margin-bottom: 25px;
  }

  p {
    margin: 5px;
    font-size: 1.1rem;
  }

  hr {
    width: 10px;
    height: 2px;
    border: none;
    background: #2e2e2e;
  }

  @media (max-width: 900px) {
    height: 1300px;

    b {
      font-size: 1.5rem;
      margin-top: 20px;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    height: 1050px;

    b {
      font-size: 1.5rem;
      margin-top: 100px;
    }

    p {
      margin: 4px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 700px) {
    height: 1100px;
    b {
      font-size: 1.2rem;
    }

    p {
      margin: 0px;
      font-size: 0.9rem;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Line = styled.div`
  border-left: thin solid #b3b3b3;
  height: 860px;

  @media (max-width: 768px) {
    margin-top: 100px;
    height: 750px;
  }

  @media (max-width: 720px) {
    margin-top: 150px;
    height: 800px;
  }
`;

export const Education = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  &.onScreen {
    animation: ${sequentialFadeIn} 5s forwards;
  }

  @media (max-width: 1400px) {
    width: 320px;
  }

  @media (max-width: 1200px) {
    width: 240px;
  }

  @media (max-width: 900px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    width: 100px;
    text-align: center;
    margin: 15px;
    margin-top: 80px;
  }
`;

export const Career = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  &.onScreen {
    animation: ${sequentialFadeIn} 6s forwards;
  }

  @media (max-width: 1400px) {
    width: 320px;
  }

  @media (max-width: 1200px) {
    width: 240px;
  }

  @media (max-width: 900px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    width: 100px;
    text-align: center;
    margin: 15px;
    margin-top: 80px;
  }
`;

export const Training = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  &.onScreen {
    animation: ${sequentialFadeIn} 7s forwards;
  }

  @media (max-width: 1400px) {
    width: 320px;
  }

  @media (max-width: 1200px) {
    width: 240px;
  }

  @media (max-width: 900px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    width: 100px;
    text-align: center;
    margin: 15px;
    margin-top: 80px;
  }
`;
