import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Con, Section6 } from "../styled/StyleProject";
import mood from "../img/mood.png";
import insta from "../img/insta.png";

function Project() {
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);

  const handleScroll = () => {
    const section6 = document.getElementById("Section6");
    if (section6) {
      const rect = section6.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setAnimateFirst(true);
        setTimeout(() => setAnimateSecond(true), 500);
      } else {
        setAnimateFirst(false);
        setAnimateSecond(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Element name='Section6' id='Section6'>
        <Section6>
          <h1>Projects</h1>
          <Con className={animateFirst ? "animate-first" : "hidden-left"}>
            <h3>MOOD</h3>
            <p className='team'>(팀프로젝트)</p>
            <div className='center'>
              <img src={mood} />
              <div className='right'>
                <p className='ment'>
                  감정에 따라 클래식 음악 추천 MOOD는 클래식 음악을 통해
                  감정적인 치유와 공감을 원하시는 분들, 기분의 영역을 클릭하거나
                  설문조사를 진행하고, 관련된 클래식 음악을 추천을 해드리기 위해
                  개발했습니다.
                </p>
                <hr />
                <p className='skills'>
                  내가 한 기능 : 검색 기능, 좋아요∙스크랩 기능, 작곡가별 음악
                  추천 기능, 좋아요∙스트리밍 순 실시간 차트 기능, 음악
                  상세페이지(댓글, 대댓글) 기능
                </p>
                <a
                  href='https://github.com/MOOD-classic/FE-MOOD'
                  target='_blank'
                >
                  Git hub 링크
                </a>
                <p className='front'>
                  Front-end : TypeScript, styled-components, React-Query, Redux
                </p>
              </div>
            </div>
          </Con>
          <Con className={animateSecond ? "animate-second" : "hidden-right"}>
            {" "}
            <h3>Instagram</h3>
            <p className='team'>(팀프로젝트)</p>
            <div className='center'>
              <img src={insta} />
              <div className='right'>
                <p className='ment'>
                  중요한 기능들은 다 담겨있는 인스타그램, 실제로 많은 사용자가
                  있는 서비스를 직접 내 손으로 한 땀 한 땀 만들어가는 것만큼
                  빠르고 효과적인 학습은 없을 것 같아서 클론 코딩을 해봤습니다.
                </p>
                <hr />
                <p className='skills'>
                  내가 한 기능 : 로그인 기능, 로그아웃 기능, 카카오로그인 기능
                </p>
                <a
                  href='https://github.com/orgs/hanghaeClone3team/repositories'
                  target='_blank'
                >
                  Git hub 링크
                </a>
                <p className='front'>
                  Front-end : styled-components, React-Query
                </p>
              </div>
            </div>
          </Con>
        </Section6>
      </Element>
    </>
  );
}

export default Project;
