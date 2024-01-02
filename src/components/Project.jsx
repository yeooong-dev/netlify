import React, { useRef } from "react";
import { Element } from "react-scroll";
import { Con, Margin, Section6 } from "../styled/StyleProject";
import port from "../img/port.png";
import mood from "../img/mood.png";
import seoulcon from "../img/seoulcon.png";
import insta from "../img/insta.png";
import { Width } from "../styled/StyleAbout";
import { useInView } from "framer-motion";

function Project() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.9 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.9 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.9 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.9 });

  return (
    <>
      <Element name='Section6' id='Section6'>
        <Width>
          <Section6>
            <h1>Projects</h1>
            <Con ref={ref1} animate={isInView1}>
              <h3>PORT</h3>
              <p className='team'>(개인프로젝트)</p>
              <div className='center'>
                <img src={port} alt='port' />
                <div className='right'>
                  <p className='ment'>
                    PORT는 일정 관리 및 채팅 기능을 갖춘 업무용 협업 툴입니다.
                    React와 Node.js를 활용하여 클라이언트와 서버를 전체적으로
                    구현했으며, 이를 통해 조금 더 깊게 이해할 수 있었습니다.
                  </p>
                  <hr />
                  <p className='skills'>
                    주요 기능 : 로그인, CRUD, 검색 기능, 채팅 기능, 다크모드 등
                  </p>
                  <p className='front'>
                    Front-end : TypeScript, styled-components, React-Query
                    <br />
                    Back-end : TypeScript, MySQL, Socket.IO
                  </p>
                  <a
                    href='https://github.com/yeooong-dev/FE-PORT'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Git hub : Front-end 링크
                  </a>
                  <a
                    href='https://github.com/yeooong-dev/BE-PORT'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Back-end 링크
                  </a>
                  <br />
                  <a
                    href='https://fe-port-yeooong-dev.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    PORT 사이트 링크
                  </a>
                </div>
              </div>
            </Con>
            <Con ref={ref2} animate={isInView2}>
              <h3>SEOULCon</h3>
              <p className='team'>(팀프로젝트)</p>
              <div className='center'>
                <img src={seoulcon} alt='seoulcon' />
                <div className='right'>
                  <p className='ment'>
                    SEOULCon은 전 세계 5억 명이 시청하고, 총합 팔로워 30억의
                    글로벌 셀럽 3,000팀이 현장에서 함께 즐기는 서울콘입니다.
                    외주 프로젝트로 참여하여 실제 협업 경험을 쌓았습니다.
                  </p>
                  <hr />
                  <p className='skills'>역할 : 웹사이트의 퍼블리싱을 담당</p>
                  <p className='front'>
                    Front-end : TypeScript, styled-components
                  </p>
                  <a
                    href='https://www.seoul-con.com/ko'
                    target='_blank'
                    rel='noreferrer'
                  >
                    SEOULCon 사이트 링크
                  </a>
                </div>
              </div>
            </Con>
            <Con ref={ref3} animate={isInView3}>
              <h3>MOOD</h3>
              <p className='team'>(팀프로젝트)</p>
              <div className='center'>
                <img src={mood} alt='mood' />
                <div className='right'>
                  <p className='ment'>
                    MOOD 사이트는 사용자의 현재 기분을 선택하면 그에 맞는 클래식
                    음악을 추천하여 치유를 해주며, 같은 감정을 느끼는
                    사용자들끼리 서로 공감하게 만드는 사이트입니다.
                  </p>
                  <hr />
                  <p className='skills'>
                    맡은 기능 : 검색 기능, 좋아요∙스크랩 기능, 작곡가별 음악
                    추천 기능, 좋아요∙스트리밍 순 실시간 차트 기능, 음악
                    상세페이지(댓글, 대댓글) 기능
                  </p>
                  <p className='front'>
                    Front-end : TypeScript, styled-components, React-Query,
                    Redux
                  </p>
                  <a
                    href='https://github.com/MOOD-classic/FE-MOOD'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Git hub : Front-end 링크
                  </a>
                </div>
              </div>
            </Con>
            <Con ref={ref4} animate={isInView4}>
              <h3>Instagram</h3>
              <p className='team'>(팀프로젝트)</p>
              <div className='center'>
                <img src={insta} alt='insta' />
                <div className='right'>
                  <p className='ment'>
                    중요한 기능들은 다 담겨있는 인스타그램, 실제로 많은 사용자가
                    있는 서비스를 직접 내 손으로 한 땀 한 땀 만들어가는 것만큼
                    빠르고 효과적인 학습은 없을 것 같아서 클론 코딩을
                    해봤습니다.
                  </p>
                  <hr />
                  <p className='skills'>
                    맡은 기능 : 회원가입 validation 기능, 로그인∙로그아웃 기능,
                    카카오로그인 기능
                  </p>
                  <p className='front'>
                    Front-end : styled-components, React-Query
                  </p>
                  <a
                    href='https://github.com/orgs/hanghaeClone3team/repositories'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Git hub : Front-end 링크
                  </a>
                </div>
              </div>
            </Con>
          </Section6>
        </Width>
        <Margin />
      </Element>
    </>
  );
}

export default Project;
