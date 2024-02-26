import { css, keyframes, styled } from "styled-components";

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
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$backgroundColor || "#f0f0f0"};
    overflow-y: hidden;

    h1 {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 2.5rem;
        font-family: var(--title-font);
        color: #2e2e2e;
    }

    b {
        font-size: 2rem;
        font-family: var(--title-font);
        margin: 25px;
        color: #2e2e2e;
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
        b {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        b {
            font-size: 1.5rem;
        }

        p {
            margin: 4px;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 700px) {
        b {
            font-size: 1.2rem;
        }

        p {
            margin: 0px;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 600px) {
        height: 950px;

        h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 550px) {
        width: 95%;
        b {
            font-size: 1rem;
        }
    }
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const Line = styled.div`
    border-left: thin solid #b3b3b3;
    height: 800px;
`;

export const Education = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    text-align: center;

    &.onScreen {
        animation: ${css`
            ${sequentialFadeIn} 5s forwards
        `};
    }

    @media (max-width: 455px) {
        margin: 10px;
    }
`;

export const Career = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    text-align: center;

    &.onScreen {
        animation: ${css`
            ${sequentialFadeIn} 6s forwards
        `};
    }

    @media (max-width: 455px) {
        margin: 10px;
    }
`;

export const Training = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    text-align: center;

    &.onScreen {
        animation: ${css`
            ${sequentialFadeIn} 5s forwards
        `};
    }

    @media (max-width: 455px) {
        margin: 10px;
    }
`;
