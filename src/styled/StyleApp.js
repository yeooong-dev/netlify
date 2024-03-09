import { styled, keyframes, css } from "styled-components";

const shapeChangeAndRotate = keyframes`
  0%, 100% {
    transform: rotate(0deg);
    border-radius: 50%;
  }
  25% {
    border-radius: 0%; 
  }
  50% {
    transform: rotate(180deg);
    border-radius: 50%; 
  }
  75% {
    border-radius: 0%; 
  }
  100% {
    transform: rotate(360deg);
    border-radius: 50%; 
  }
`;

const twinkling = keyframes`
  0% {
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1);
  }
`;

const twinklingWithNoBoxShadow = keyframes`
  0% {
    background-color: #ffffff;
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 1);
  }
  20% {
    background-color: #ffc4c4;
    box-shadow: 0 0 10px 0px rgba(255, 196, 196, 1);
  }
  80% {
    background-color: #c4cfff;
    box-shadow: 0 0 10px 0px rgba(196, 207, 255, 1);
  }
  100% {
    background-color: #ffffff;
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.2);
  }
`;

export const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Star = styled.div`
  border-radius: 50%;
  background-color: white;
  position: absolute;
  overflow: hidden;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `}
  ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `}
  ${(props) =>
    props.animation &&
    css`
      animation-name: ${props.animation === "twinklingWithNoBoxShadow"
        ? twinklingWithNoBoxShadow
        : twinkling};
      animation-duration: ${props.duration}s;
    `}
`;

export const Head = styled.div`
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translate(0, -50%) skewX(0deg);
  color: #e39c40;
  z-index: 100;
  width: 100px;
  font-family: var(--bold);

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 100%;
  }

  li {
    margin: 20px;
    position: relative;
    width: 80%;
    text-align: right;
    padding-right: 20px;
  }

  li:hover {
    opacity: 50%;
    transition: 0.3s;
  }

  li.active::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(0, -50%);
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #e39c40;
  }

  @media (max-width: 1000px) {
    top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    max-width: 600px;
    text-align: center;

    ul {
      flex-direction: row;
      height: 55px;
    }

    li {
      width: 100%;
      margin: 10px;
      overflow: visible;
      padding-right: 0px;
      padding-left: 0;
      text-align: center;
    }

    li.active::after {
      right: 45%;
      top: -10px;
      width: 6px;
      height: 6px;
    }
  }

  @media (max-width: 600px) {
    li:hover {
      background: none;
      opacity: 100%;
    }
  }

  @media (max-width: 530px) {
    li {
      font-size: 12px;
    }
  }

  @media (max-width: 415px) {
    li {
      font-size: 10px;
      margin: 5px;
    }
  }
`;

const bounce = keyframes`
0%, 50% {
  transform: translateY(0);
}
25% {
  transform: translateY(-15px);
}
75% {
  transform: translateY(-15px);
}
100% {
  transform: translateY(0);
}
`;

export const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .shape {
    width: 500px;
    height: 500px;
    animation: ${shapeChangeAndRotate} 15s linear infinite;
    border: 2px solid #969696;
    opacity: 20%;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    .shape {
      width: 700px;
      height: 700px;
    }
  }

  @media (max-width: 900px) {
    .shape {
      width: 600px;
      height: 600px;
    }
  }

  @media (max-width: 750px) {
    .shape {
      width: 500px;
      height: 500px;
    }
  }

  @media (max-width: 550px) {
    .shape {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 470px) {
    .shape {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 380px) {
    .shape {
      width: 250px;
      height: 250px;
    }
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100vh;
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  gap: 30px;

  h1 {
    font-family: var(--title-font);
    font-size: 6rem;
    letter-spacing: 0.5rem;
    opacity: 80%;
    color: #f1f1f1;
  }

  span {
    font-size: 1.5rem;
    font-family: var(--sub-font);
    color: #f1f1f1;
  }

  div {
    width: 55px;
    height: 55px;
    line-height: 80px;
    background: none;
    border: 2px solid #969696;
    border-radius: 30px;
    text-align: center;
    margin-top: 30px;

    button {
      font-size: 2rem;
      background: none;
      color: #969696;
      cursor: pointer;
    }

    .animated-circle {
      position: relative;
      animation: ${css`
        ${bounce} 5s infinite
      `};
    }
  }

  div:hover {
    background: #f1f1f1;
    color: #2e2e2e;
    transition: 0.4s;
    opacity: 80%;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 3.8rem;
    }
    span {
      font-size: 1.5rem;
    }

    div {
      width: 40px;
      height: 40px;
      line-height: 60px;

      button {
        font-size: 1.5rem;
      }

      button:hover {
        background: none;
        color: white;
        opacity: 100%;
      }
    }
    div:hover {
      background: none;
      color: #f1f1f1;
      opacity: 100%;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }

    button {
      font-size: 14px;
      height: 45px;
    }
  }
`;

export const TopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  font-size: 1.2rem;
  background: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #e39c40;
  cursor: pointer;
  color: #e39c40;
  z-index: 999;

  &:hover {
    opacity: 50%;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    &:hover {
      background: none;
      opacity: 100%;
    }
  }
`;
