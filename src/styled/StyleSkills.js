import { styled } from "styled-components";

export const Center = styled.div`
  width: 100%;
  height: 80px;
  background: #8fa3bf;
  margin-top: -35px;

  h1 {
    color: #f1f1f1;
    font-size: 3rem;
    font-family: var(--title-font);
    text-align: center;
  }
`;

export const Section3 = styled.div`
  width: 100%;
  height: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#8fa3bf"};

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 25px;
    margin-top: -120px;

    .front {
      width: 360px;
      height: 980px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px;
      background: #f9f9f9;

      p {
        font-size: 1.3rem;
        font-weight: 900;
        color: #2e2e2e;
      }

      img {
        width: 70px;
        margin: 15px;
      }
    }
    .front:hover {
      margin-top: 20px;
      transition: 0.3s;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: -120px;
  }

  .back {
    width: 360px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #f9f9f9;

    p {
      font-size: 1.3rem;
      font-weight: 900;
      color: #2e2e2e;
    }

    img {
      margin-top: -10px;
      width: 130px;
    }
  }

  .dev {
    width: 360px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #f9f9f9;

    p {
      font-size: 1.3rem;
      font-weight: 900;
      color: #2e2e2e;
      margin-top: 10px;
    }

    img {
      width: 80px;
      margin-bottom: 15px;
    }
  }

  .col {
    width: 360px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background: #f9f9f9;

    p {
      font-size: 1.3rem;
      color: #2e2e2e;
      font-weight: 900;
    }

    img {
      width: 90px;
      margin: 15px;
    }
  }

  .back:hover,
  .dev:hover,
  .col:hover {
    margin-top: 20px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    .left {
      .front {
        width: 200px;
        p {
          font-size: 1.1rem;
        }
      }
    }

    .right {
      .back {
        width: 200px;

        p {
          font-size: 1.1rem;
        }
      }

      .dev {
        width: 200px;

        p {
          font-size: 1.1rem;
        }
      }

      .col {
        width: 200px;

        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
