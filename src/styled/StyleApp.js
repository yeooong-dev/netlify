import { styled, keyframes } from "styled-components";
import bg from "../img/bg.png";

export const Section1 = styled.div`
  position: relative;
  width: 100%;
  height: 1180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${bg});
  perspective: 100%;

  @media (min-width: 1200px) {
    height: 1180px;
  }

  @media (max-width: 1200px) {
    height: 1100px;
  }

  @media (max-width: 768px) {
    height: 1000px;
  }

  @media (max-width: 600px) {
    height: 800px;
  }
`;

export const Head = styled.div`
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translate(0, -50%) skewX(0deg);
  color: #e6b30e;
  z-index: 1000;
  width: 100px;
  text-align: right;
  font-family: var(--bold);

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    padding: 0;
  }

  li {
    margin: 20px;
    position: relative;
    width: 100%;
  }

  li.active::after {
    content: "";
    position: absolute;
    left: 110px;
    top: 50%;
    transform: translate(0, -50%);
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #e6b30e;
  }

  @media (max-width: 1350px) {
    top: 55px;
    right: 45%;

    ul {
      flex-direction: row;
    }

    li.active::after {
      content: none;
    }
  }

  @media (max-width: 768px) {
    top: 55px;
    right: 45%;

    ul {
      flex-direction: row;
    }

    li.active::after {
      content: none;
    }
  }

  @media (max-width: 600px) {
    right: 40%;

    li {
      margin: 12px;
      font-size: 0.9rem;
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
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: var(--title-font);
    font-size: 8rem;
    letter-spacing: 0.5rem;
    opacity: 80%;
    color: #f1f1f1;
  }

  span {
    font-size: 2rem;
    margin-bottom: 80px;
    margin-top: -25px;
    font-family: var(--sub-font);
    color: #f1f1f1;
  }

  button {
    width: 200px;
    height: 60px;
    background: none;
    border: 2px solid #f1f1f1;
    border-radius: 30px;
    color: #f1f1f1;
    font-size: 1.1rem;
    cursor: pointer;
  }

  button:hover {
    background: #f1f1f1;
    color: #2e2e2e;
    transition: 0.4s;
    opacity: 80%;
  }

  .animated-circle {
    position: relative;
    animation: ${bounce} 3s infinite;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 6rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3.8rem;
    }
    span {
      font-size: 1.7rem;
    }
  }
`;

export const TopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 50px;
  border: none;
  font-size: 1.2rem;
  background: none;
  z-index: 99;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #e6b30e;
  cursor: pointer;
  color: #e6b30e;
`;
