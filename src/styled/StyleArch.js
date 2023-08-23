import { css, keyframes, styled } from "styled-components";

const flipAndZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: rotateY(180deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1);
  }
`;

export const Section5 = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 1080px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background : #32324b;

  h1 {
    color: #f9f9f9;
    font-size: 3rem;
    font-family: var(--title-font);
    margin-bottom: 45px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    height: 230px;
    background: #f9f9f9;
    margin-bottom: 20px;
    color: #2e2e2e;

    strong {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.3rem;
    }

    a {
      text-decoration: none;
      color: #e6b30e;
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    height: 900px;

    div {
      width: 400px;
    }
  }
`;

export const Left = styled.div`
  opacity: 0;
  transform: rotateY(180deg) scale(0.5);
  backface-visibility: hidden;
  animation: ${({ $animateSection5 }) =>
    $animateSection5
      ? css`
          ${flipAndZoomIn} 1s forwards
        `
      : ""};
`;

export const Right = styled.div`
  opacity: 0;
  transform: rotateY(180deg) scale(0.5);
  backface-visibility: hidden;
  animation: ${({ $animateSection5 }) =>
    $animateSection5
      ? css`
          ${flipAndZoomIn} 1s forwards
        `
      : ""};
`;
