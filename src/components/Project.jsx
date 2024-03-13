import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import port from "../img/port.png";
import mood from "../img/mood.png";
import seoulcon from "../img/seoulcon.png";
import insta from "../img/insta.png";
import { Width } from "../styled/StyleAbout";
import styled from "styled-components";
import { motion } from "framer-motion";

const slides = [
  {
    img: port,
    title: "PORT",
    team: "(개인프로젝트)",
    description:
      "이전에는 클라이언트 작업만 했었지만 서버 측 기술에 대해 이해도를 높이고 싶다는 목표로 개인 프로젝트를 진행하였습니다. React와 Node.js를 활용하여 클라이언트 및 서버 양쪽 모두를 구현하였으며, 배포까지 완료하였습니다. 이 과정을 통해 기술적 역량을 한층 더 심화시킬 수 있었습니다.",
    skills:
      "주요 기능 : 회원가입, 로그인, 로그아웃, 오늘의 할 일, 캘린더, 경조사 등록, 기업페이지, 조직도 조회, 선착순 연차 신청, 검색 기능, 다크모드 등",
    front: "Front-end : TypeScript, styled-components, React-Query",
    back: "Back-end : TypeScript, MySQL",
    feLink: "https://github.com/yeooong-dev/FE-PORT",
    beLink: "https://github.com/yeooong-dev/BE-PORT",
    notionLink: "https://www.notion.so/PORT-2d4b3563c5954497bf39f77637d8ba07",
    siteLink: "https://port-six-theta.vercel.app/",
  },
  {
    img: mood,
    title: "MOOD",
    team: "(팀프로젝트)",
    description:
      "MOOD 사이트는 사용자의 현재 기분을 선택하면 그에 맞는 클래식 음악을 추천하여 치유를 해주며, 같은 감정을 느끼는 사용자들끼리 서로 공감하게 만드는 사이트입니다. 팀 프로젝트로 협업을 통해 많은 것을 배운 프로젝트였습니다.",
    skills:
      "맡은 기능 : 검색 기능, 좋아요∙스크랩 기능, 작곡가별 음악 추천 기능, 좋아요∙스트리밍 순 실시간 차트 기능, 음악 상세페이지(댓글, 대댓글)와 소개페이지 스타일링, 반응형 구현",
    front: "Front-end : TypeScript, styled-components, React-Query, Redux",
    feLink: "https://github.com/MOOD-classic/FE-MOOD",
    notionLink: "https://www.notion.so/MOOD-f0f722a676194a7eb532e1be615f93c8",
  },
  {
    img: seoulcon,
    title: "SEOULCon",
    team: "(팀프로젝트)",
    description:
      "전 세계 5억 명이 시청하고, 총합 팔로워 30억의 글로벌 셀럽 3,000팀이 현장에서 함께 즐기는 서울콘입니다. 외주 프로젝트로 참여하게 되어 실제 협업 경험을 쌓았습니다. 웹디자이너분, 백엔드 개발자님과 소통을 하면서 조율해가는 과정이 매우 흥미로웠으며 많은 것을 배우는 과정이였습니다.",
    skills: "역할 : 웹사이트 퍼블리싱 담당, 애니메이션, media-query 반응형",
    front: "Front-end : TypeScript, styled-components",
    feLink: "https://github.com/ysdls/seoul-front",
    siteLink: "https://www.seoul-con.com/ko",
  },
  {
    img: insta,
    title: "Instagram",
    team: "(팀프로젝트)",
    description:
      "중요한 기능들은 다 담겨있는 인스타그램, 실제로 많은 사용자가 있는 서비스를 직접 내 손으로 한 땀 한 땀 만들어가는 것만큼 빠르고 효과적인 학습은 없을 것 같아서 클론 코딩을 해봤습니다.",
    skills:
      "맡은 기능 : 회원가입 validation 기능, 로그인∙로그아웃 기능, 카카오로그인 기능",
    front: "Front-end : styled-components, React-Query",
    feLink: "https://github.com/orgs/hanghaeClone3team/repositories",
    notionLink:
      "https://www.notion.so/Instagram-420e817ea5f549b38e07814d1bd4e5e1",
  },
];

function Project() {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideWidth = 100;

  const prevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => {
      return Math.min(prevSlide + 1, slides.length - 1);
    });
  };

  return (
    <>
      <Element name='Section6' id='Section6'>
        <Width>
          <Section6 ref={ref}>
            <h1>Projects</h1>
            <div className='slideBtn'>
              <button onClick={prevSlide} className='prev'>
                {"<"}
              </button>
              <button onClick={nextSlide} className='next'>
                {">"}
              </button>
            </div>

            <SlidesContainer>
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  style={{
                    transform: `translateX(-${activeSlide * slideWidth}%)`,
                  }}
                >
                  <Con key={index} animate='visible'>
                    <h3>{slide.title}</h3>
                    <p className='team'>{slide.team}</p>
                    <img src={slide.img} alt={slide.title} />

                    <p className='ment'>{slide.description}</p>
                    <p className='skills'>{slide.skills}</p>
                    <p className='front'>{slide.front}</p>
                    <p className='back'>{slide.back}</p>
                    {slide.feLink && (
                      <a href={slide.feLink} target='_blank' rel='noreferrer'>
                        Front-end 코드 보기
                      </a>
                    )}
                    {slide.beLink && (
                      <a href={slide.beLink} target='_blank' rel='noreferrer'>
                        Back-end 코드 보기
                      </a>
                    )}
                    {slide.notionLink && (
                      <a
                        href={slide.notionLink}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Notion 보기
                      </a>
                    )}
                    {slide.siteLink && (
                      <a
                        href={slide.siteLink}
                        target='_blank'
                        rel='noreferrer'
                        style={{
                          fontWeight: "bold",
                          color: "#d19028",
                        }}
                      >
                        사이트 방문하기
                      </a>
                    )}
                  </Con>
                </Slide>
              ))}
            </SlidesContainer>
          </Section6>
        </Width>
      </Element>
    </>
  );
}

export default Project;

const fadeInUpVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
  hidden: { opacity: 0, y: 50 },
};

const Section6 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  z-index: 99;
  margin: 100px 0;

  h1 {
    font-size: 2rem;
    font-family: var(--title-font);
    color: #2e2e2e;
  }

  .slideBtn {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-bottom: 10px;

    .prev {
      width: 45px;
      height: 45px;
      border: 2px solid #d0d0d0;
      color: #d0d0d0;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -webkit-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -moz-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
    }

    .next {
      width: 45px;
      height: 45px;
      border: 2px solid #d0d0d0;
      color: #d0d0d0;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -webkit-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -moz-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
    }
  }

  @media (max-width: 1300px) {
    .slideBtn {
      width: 60%;
      height: 80px;
    }
  }

  @media (max-width: 800px) {
    .slideBtn {
      height: 60px;

      .prev {
        width: 35px;
        height: 35px;
        font-size: 1.5rem;
      }

      .next {
        width: 35px;
        height: 35px;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const SlidesContainer = styled.div`
  display: flex;
  overflow: visible;
  padding: 0 calc((100% - slideWidth * visibleSlides) / 2);
  width: 100%;
  margin-left: 60%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1300px) {
    margin-left: 50%;
  }

  @media (max-width: 1000px) {
    margin-left: 40%;
  }

  @media (max-width: 700px) {
    margin-left: 30%;
  }

  @media (max-width: 550px) {
    margin-left: 25%;
  }
`;

const Slide = styled.div`
  min-width: 40%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  overflow: hidden;
  top: 0;

  .motion-progress {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 4px;
    top: 0;
    left: 0;
    background: #424242;
  }

  @media (max-width: 1300px) {
    min-width: 50%;
  }

  @media (max-width: 1000px) {
    min-width: 60%;
  }

  @media (max-width: 700px) {
    min-width: 70%;
  }

  @media (max-width: 550px) {
    min-width: 75%;
  }
`;

const Con = styled(motion.div).attrs((props) => ({
  variants: fadeInUpVariants,
  initial: "hidden",
  animate: props.animate ? "visible" : "hidden",
}))`
  width: 90%;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f6f6f6;
  margin-bottom: 50px;
  border-radius: 25px;
  text-align: center;
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
    width: 100%;
    text-decoration: none;
    color: #dba058;
    font-size: 1rem;
    line-height: 30px;
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
    width: 90%;
    margin-bottom: 20px;
  }

  .ment {
    width: 80%;
    line-height: 1.8rem;
    margin-bottom: 10px;
  }

  .skills {
    width: 80%;
    line-height: 1.8rem;
    margin-bottom: 15px;
  }

  .front {
    width: 80%;
    line-height: 2em;
  }

  .back {
    width: 80%;
    line-height: 2em;
    margin-bottom: 15px;
  }

  @media (max-width: 1000px) {
    height: 900px;
  }

  @media (max-width: 550px) {
    height: 900px;

    h3 {
      font-size: 2rem;
      margin-bottom: 5px;
    }

    a {
      font-size: 14px;
      line-height: 25px;
    }

    a:hover {
      opacity: 100%;
    }

    .team {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    img {
      margin-bottom: 10px;
    }

    .ment {
      font-size: 14px;
      line-height: 1.7rem;
      margin-bottom: 10px;
    }

    .skills {
      font-size: 14px;
      line-height: 1.7rem;
      margin-bottom: 10px;
    }

    .front {
      font-size: 14px;
      line-height: 1.7rem;
      margin-bottom: 10px;
    }
  }
`;
