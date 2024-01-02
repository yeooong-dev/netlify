import { styled } from "styled-components";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 100 },
};

export const Section5 = styled.div`
  position: relative;
  top: 0;
  width: 90%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  background: #f0f0f0;

  h1 {
    color: #2e2e2e;
    font-size: 3rem;
    font-family: var(--title-font);
    margin-bottom: 45px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
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
      text-align: center;
    }

    a:hover {
      opacity: 50%;
      transition: 0.3s;
    }
  }

  @media (max-width: 600px) {
    height: 600px;

    h1 {
      font-size: 2rem;
      margin-bottom: 45px;
    }

    div {
      a {
        font-size: 1.2rem;
      }
      a:hover {
        background: none;
        opacity: 100%;
      }
    }
  }

  @media (max-width: 450px) {
    div {
      a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 360px) {
    div {
      a {
        font-size: 14px;
      }
    }
  }
`;

export const Left = styled(motion.div).attrs((props) => ({
  variants: fadeInUpVariants,
  initial: "hidden",
  animate: props.animate ? "visible" : "hidden",
}))``;

export const Right = styled(motion.div).attrs((props) => ({
  variants: fadeInUpVariants,
  initial: "hidden",
  animate: props.animate ? "visible" : "hidden",
}))``;
