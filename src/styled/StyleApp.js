import { styled, keyframes, css } from "styled-components";

export const Section1 = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Head = styled.div`
    position: fixed;
    top: 50%;
    right: 40px;
    transform: translate(0, -50%) skewX(0deg);
    color: #e6970e;
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
        background: #e6970e;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const TextBox = styled.div`
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;

    h1 {
        font-family: var(--title-font);
        font-size: 8rem;
        letter-spacing: 0.5rem;
        opacity: 80%;
        color: #f1f1f1;
        padding: 1rem;
    }

    span {
        font-size: 2rem;
        margin-bottom: 30px;
        margin-top: 50px;
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
        animation: ${css`
            ${bounce} 3s infinite
        `};
    }

    @media (max-width: 850px) {
        h1 {
            font-size: 5rem;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 3.8rem;
        }
        span {
            font-size: 1.7rem;
        }

        button:hover {
            background: none;
            color: white;
            opacity: 100%;
        }
    }

    @media (max-width: 420px) {
        h1 {
            font-size: 3rem;
        }
        span {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 350px) {
        h1 {
            font-size: 2rem;
        }
        span {
            font-size: 1rem;
            margin-top: 20px;
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
    border: 3px solid #e6970e;
    cursor: pointer;
    color: #e6970e;
    z-index: 99;

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
