import styled from "styled-components";
import { motion } from "framer-motion";

const fadeInUpVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
    hidden: { opacity: 0, y: 50 },
};

export const Section6 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #f0f0f0;

    h1 {
        font-size: 3rem;
        font-family: var(--title-font);
        margin: 3rem;
        color: #2e2e2e;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const Con = styled(motion.div).attrs((props) => ({
    variants: fadeInUpVariants,
    initial: "hidden",
    animate: props.animate ? "visible" : "hidden",
}))`
    width: 1050px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f6f6f6;
    margin-bottom: 50px;
    border-radius: 25px;
    box-shadow: 8px 8px 6px 2px rgba(94, 94, 94, 0.13);
    -webkit-box-shadow: 8px 8px 6px 2px rgba(94, 94, 94, 0.13);
    -moz-box-shadow: 8px 8px 6px 2px rgba(94, 94, 94, 0.13);

    h3 {
        font-size: 2.3rem;
        font-weight: bold;
        font-family: TheJamsil5Bold;
        color: #2e2e2e;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #dba058;
        font-size: 1rem;
        margin-right: 15px;
    }

    a:hover {
        opacity: 50%;
        transition: 0.3s;
    }

    .team {
        font-size: 1.1rem;
        color: gray;
        margin-bottom: 20px;
    }

    img {
        width: 700px;
        margin-right: 30px;
    }

    .center {
        width: 80%;
        display: flex;
        align-items: center;

        .right {
            width: 100%;
            height: auto;
        }
    }

    .ment {
        line-height: 1.6rem;
    }

    .skills {
        line-height: 1.5rem;
        margin-bottom: 10px;
    }

    .front {
        line-height: 1.5rem;
        margin-bottom: 10px;
    }

    @media (max-width: 1400px) {
        width: 920px;

        img {
            width: 450px;
        }

        h3 {
            font-size: 2rem;
        }
    }

    @media (max-width: 1200px) {
        width: 740px;

        img {
            width: 350px;
        }
    }

    @media (max-width: 1000px) {
        width: 600px;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            width: 430px;
            margin-right: -5px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 1.5rem;
        }

        .center {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    @media (max-width: 750px) {
        width: 450px;
        height: 730px;

        img {
            width: 380px;
        }

        h3 {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 600px) {
        width: 400px;
        height: 730px;

        img {
            width: 250px;
        }

        a:hover {
            background: none;
            opacity: 100%;
        }
    }

    @media (max-width: 450px) {
        width: 300px;
    }

    @media (max-width: 380px) {
        width: 260px;
        height: 700px;

        .ment {
            font-size: 14px;
        }

        .skills {
            font-size: 14px;
        }

        .front {
            font-size: 14px;
        }

        a {
            font-size: 14px;
        }
    }
`;

export const Margin = styled.div`
    width: 100%;
    height: 200px;
`;
