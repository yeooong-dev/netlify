import { styled } from "styled-components";

export const fadeInUpVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50 },
};

export const Section3 = styled.div`
    position: relative;
    width: 85%;
    height: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$backgroundColor || "#8fa3bf"};

    h1 {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 3rem;
        font-family: var(--title-font);
        color: #f6f6f6;
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 25px;
        margin-top: -80px;

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
        margin-top: -80px;
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

    @media (max-width: 1100px) {
        .left {
            .front {
                width: 250px;
            }
        }

        .right {
            .back {
                width: 250px;
            }

            .dev {
                width: 250px;
            }

            .col {
                width: 250px;
            }
        }
    }

    @media (max-width: 700px) {
        .left {
            .front {
                width: 150px;
                p {
                    font-size: 1.1rem;
                }
            }
        }

        .right {
            .back {
                width: 150px;

                p {
                    font-size: 1.1rem;
                }
            }

            .dev {
                width: 150px;

                p {
                    font-size: 1.1rem;
                }
            }

            .col {
                width: 150px;

                p {
                    font-size: 1.1rem;
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: 600px) {
        height: 1200px;

        h1 {
            font-size: 2rem;
        }

        .back:hover,
        .dev:hover,
        .col:hover {
            margin-top: 0px;
        }

        .left {
            .front:hover {
                margin-top: 0px;
            }
        }
    }

    @media (max-width: 550px) {
        width: 95%;
    }

    @media (max-width: 420px) {
        .left {
            .front {
                width: 110px;
                p {
                    font-size: 12px;
                }
            }
        }

        .right {
            .back {
                width: 110px;

                p {
                    font-size: 12px;
                }
            }

            .dev {
                width: 110px;

                p {
                    font-size: 12px;
                }
            }

            .col {
                width: 110px;

                p {
                    font-size: 12px;
                }
            }
        }
    }
`;
