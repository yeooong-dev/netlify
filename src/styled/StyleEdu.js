import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Section4 = styled.div`
  position: relative;
  width: 100%;
  height: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;

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

  @media (max-width: 768px) {
    height: 1000px;

    b {
      font-size: 1.6rem;
    }

    p {
      margin: 4px;
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    height: 900px;

    b {
      font-size: 1.2rem;
    }

    p {
      margin: 1px;
      font-size: 0.9rem;
    }
  }
`;
export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &.onScreen {
    opacity: 1;
    .front,
    .back,
    .dev,
    .col {
      animation: ${fadeIn} 2s ease-in-out forwards;
    }
  }
`;

export const Line = styled.div`
  border-left: thin solid #b3b3b3;
  height: 860px;
`;

export const Education = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  &.onScreen {
    animation-name: ${fadeIn};
    animation-delay: 1s;
  }

  @media (max-width: 1200px) {
    width: 370px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 120px;
    text-align: center;
    margin: 15px;
    margin-top: 50px;
  }
`;

export const Career = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  &.onScreen {
    animation-name: ${fadeIn};
    animation-delay: 2s;
  }

  @media (max-width: 1200px) {
    width: 370px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 120px;
    text-align: center;
    margin: 15px;
    margin-top: 50px;
  }
`;

export const Training = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  &.onScreen {
    animation-name: ${fadeIn};
    animation-delay: 3s;
  }

  @media (max-width: 1200px) {
    width: 370px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 120px;
    text-align: center;
    margin: 15px;
    margin-top: 50px;
  }
`;
