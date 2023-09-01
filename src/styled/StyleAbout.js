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

export const Width = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section2 = styled.div`
  width: 85%;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-image: ${(props) => !props.backgroundColor && `url(${about_bg})`};
  transition: background-color 0.5s step;
  border-radius: 30px 30px 0 0;

  &.animate {
    .center {
      animation: ${slideIn} 2s forwards;
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

  @media (max-width: 1400px) {
    .center {
      width: 800px;

      hr {
        width: 700px;
      }
    }
  }

  @media (max-width: 1200px) {
    height: 900px;

    .center {
          width: 670px;
          height: 430px;
    
          hr {
            width: 600px;
          }
    
          .inner {
            margin-top: -5px;
            margin-left: 4.5rem;
            font-size: 1.2rem;
          }
      }
  }

  @media (max-width: 1000px) {

    .center {
      width: 550px;
      height: 410px;

      hr {
        width: 500px;
      }

      .inner {
        margin-top: -8px;
        margin-left: 4rem;
        font-size: 1.15rem;
      }
    }
   }

   @media (max-width: 800px) {
    height: 800px;

    .center {
      width: 430px;
      height: 360px;

      hr {
        width: 350px;
      }

      .inner {
        font-size: 1rem;
        margin-top: -5px;
        margin-left: 3rem;
      }
    }
   }

   @media (max-width: 600px) {

    .center {
      width: 300px;
      height: 400px;

      hr {
        width: 250px;
      }

      .inner {
        margin-top: -5px;
        margin-left: 2.5rem;
      }
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

  @media (max-width: 1400px) {
    font-size: 1.5rem;
    margin-left: 40rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
    margin-left: 33.5rem;
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    margin-left: 26.5rem;
  }

  @media (max-width: 800px) {
    margin-left: 19.2rem;
  }

  @media (max-width: 600px) {
    margin-left: 11rem;
  }
`;

export const Name = styled.h1`
  margin-top: 25px;
  margin-bottom: 30px;
  color: #271f45;
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
`;

export const P = styled.p`
  margin-bottom: 38px;
  color: #271f45;
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
`;
