import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import port from "../img/port.png";
import mood from "../img/mood.png";
import seoulcon from "../img/seoulcon.png";
import insta from "../img/insta.png";
import { Width } from "../styled/StyleAbout";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Project() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const { scrollY } = useViewportScroll();
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      img: port,
      title: "PORT",
      team: "(개인프로젝트)",
      description:
        "PORT는 일정 관리 및 채팅 기능을 갖춘 업무용 협업 툴입니다. React와 Node.js를 활용하여 클라이언트와 서버를 전체적으로 구현했으며, 이를 통해 조금 더 깊게 이해할 수 있었습니다.",
      skills: "주요 기능 : 로그인, CRUD, 검색 기능, 채팅 기능, 다크모드 등",
      front: "Front-end : TypeScript, styled-components, React-Query",
      back: "Back-end : TypeScript, MySQL, Socket.IO",
      feLink: "https://github.com/yeooong-dev/FE-PORT",
      beLink: "https://github.com/yeooong-dev/BE-PORT",
      siteLink: "https://port-six-theta.vercel.app/",
    },
    {
      img: mood,
      title: "MOOD",
      team: "(팀프로젝트)",
      description:
        "MOOD 사이트는 사용자의 현재 기분을 선택하면 그에 맞는 클래식 음악을 추천하여 치유를 해주며, 같은 감정을 느끼는 사용자들끼리 서로 공감하게 만드는 사이트입니다.",
      skills:
        "맡은 기능 : 검색 기능, 좋아요∙스크랩 기능, 작곡가별 음악 추천 기능, 좋아요∙스트리밍 순 실시간 차트 기능, 음악 상세페이지(댓글, 대댓글) 기능",
      front: "Front-end : TypeScript, styled-components, React-Query, Redux",
      feLink: "https://github.com/MOOD-classic/FE-MOOD",
    },
    {
      img: seoulcon,
      title: "SEOULCon",
      team: "(팀프로젝트)",
      description:
        "SEOULCon은 전 세계 5억 명이 시청하고, 총합 팔로워 30억의 글로벌 셀럽 3,000팀이 현장에서 함께 즐기는 서울콘입니다. 외주 프로젝트로 참여하여 실제 협업 경험을 쌓았습니다.",
      skills: "역할 : 웹사이트의 퍼블리싱을 담당",
      front: "Front-end : TypeScript, styled-components",
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
    },
  ];
  const slideWidth = 100;

  useEffect(() => {
    if (ref.current) {
      const updateOffsets = () => {
        const rect = ref.current.getBoundingClientRect();
        setStartOffset(window.pageYOffset + rect.top);
        setEndOffset(window.pageYOffset + rect.top + rect.height);
      };

      window.addEventListener("resize", updateOffsets);
      updateOffsets();

      return () => window.removeEventListener("resize", updateOffsets);
    }
  }, [ref]);

  const x = useTransform(
    scrollY,
    [startOffset, endOffset],
    ["0%", `${-100 * (slides.length - 1)}%`]
  );

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      setStartOffset(offsetTop);
      setEndOffset(offsetTop + rect.height);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY.get() >= startOffset && scrollY.get() <= endOffset) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [scrollY, startOffset, endOffset]);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldActivateHorizontalScroll = window.scrollY >= endOffset;
      setIsActive(shouldActivateHorizontalScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [endOffset]);

  useEffect(() => {
    if (!isActive) return;

    let lastScrollLeft = window.pageXOffset;
    const slowHorizontalScroll = () => {
      requestAnimationFrame(() => {
        const currentScrollLeft = window.pageXOffset;
        const diffX = currentScrollLeft - lastScrollLeft;
        if (Math.abs(diffX) > 1) {
          window.scrollTo({
            top: 0,
            left: lastScrollLeft + diffX / 50,
            behavior: "smooth",
          });
          lastScrollLeft += diffX / 50;
          slowHorizontalScroll();
        }
      });
    };

    window.addEventListener("scroll", slowHorizontalScroll, { passive: true });
    return () => window.removeEventListener("scroll", slowHorizontalScroll);
  }, [isActive]);

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

            <SlidesContainer
              as={motion.div}
              style={{ x }}
              drag='x'
              dragConstraints={{ left: -100 * (slides.length - 1), right: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
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
                    <div className='right'>
                      <p className='ment'>{slide.description}</p>
                      <hr />
                      <p className='skills'>{slide.skills}</p>
                      <p className='front'>{slide.front}</p>
                      {slide.feLink && (
                        <a href={slide.feLink} target='_blank' rel='noreferrer'>
                          Front-end 코드 보기
                        </a>
                      )}
                      <br />
                      {slide.beLink && (
                        <a href={slide.beLink} target='_blank' rel='noreferrer'>
                          Back-end 코드 보기
                        </a>
                      )}
                      {slide.siteLink && (
                        <a
                          href={slide.siteLink}
                          target='_blank'
                          rel='noreferrer'
                          style={{ display: "block", marginTop: "10px" }}
                        >
                          사이트 방문하기
                        </a>
                      )}
                    </div>
                  </Con>
                </Slide>
              ))}
            </SlidesContainer>
          </Section6>
        </Width>
        <Margin />
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

  h1 {
    font-size: 3rem;
    font-family: var(--title-font);
    margin: 30px;
    color: #2e2e2e;
  }

  .slideBtn {
    width: 50%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding: 10px;

    .prev {
      width: 45px;
      height: 45px;
      border: 2px solid #6e6e6e;
      color: #6e6e6e;
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
      border: 2px solid #6e6e6e;
      color: #6e6e6e;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -webkit-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
      -moz-box-shadow: 5px 5px 5px -2px rgba(166, 166, 166, 0.57);
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
  margin-left: 70%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled.div`
  min-width: 30%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Con = styled(motion.div).attrs((props) => ({
  variants: fadeInUpVariants,
  initial: "hidden",
  animate: props.animate ? "visible" : "hidden",
}))`
  width: 90%;
  height: 850px;
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
    width: 100%;
    text-decoration: none;
    color: #dba058;
    font-size: 1rem;
    line-height: 25px;
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

  .right {
    width: 80%;
    text-align: center;
  }

  .ment {
    line-height: 1.8rem;
  }

  .skills {
    line-height: 1.5rem;
    margin-bottom: 15px;
  }

  .front {
    line-height: 2em;
    margin-bottom: 15px;
  }

  @media (max-width: 1300px) {
    width: 83%;
    height: 900px;
  }

  @media (max-width: 800px) {
    height: 800px;

    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 550px) {
    width: 90%;
    height: 700px;

    h3 {
      font-size: 20px;
    }

    a {
      font-size: 14px;
      line-height: 1.5rem;
    }

    a:hover {
      opacity: 100%;
      transition: 0.3s;
    }

    .team {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    img {
      width: 90%;
      margin-bottom: 20px;
    }

    .right {
      width: 80%;
      text-align: center;
    }

    .ment {
      line-height: 1.6rem;
      font-size: 14px;
    }

    .skills {
      font-size: 14px;
      line-height: 1.6rem;
      margin-bottom: 15px;
    }

    .front {
      font-size: 14px;
      line-height: 1.6em;
      margin-bottom: 15px;
    }
  }
`;

const Margin = styled.div`
  width: 100%;
  height: 200px;
`;
