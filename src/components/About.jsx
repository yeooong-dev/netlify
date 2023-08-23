import { Link, Element } from "react-scroll";
import { TopBtn } from "../styled/StyleApp";
import { Name, P, Section2, Title } from "../styled/StyleAbout";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function About({ isSection1Active }) {
  const [showTopButton, setShowTopButton] = useState(false);
  const [animateSection2, setAnimateSection2] = useState(false);
  const [section2Color, setSection2Color] = useState("");

  const handleScroll = () => {
    const section2 = document.getElementById("Section2");
    const section3 = document.getElementById("Section3");

    if (!section2 || !section3) return;

    const section2Rect = section2.getBoundingClientRect();
    const section3Rect = section3.getBoundingClientRect();

    if (section2Rect.bottom > 0 && section2Rect.top < window.innerHeight) {
      setAnimateSection2(true);
    } else {
      setAnimateSection2(false);
    }

    // Section3가 화면에 조금이라도 보일 때
    if (section3Rect.top <= window.innerHeight - 0 && section3Rect.top > 0) {
      setSection2Color("#8fa3bf");
    }
    // 그렇지 않을 때 Section2의 배경색 복원
    else {
      setSection2Color("");
    }

    if (window.scrollY >= window.innerHeight) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
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
    <Element name='Section2' id='Section2'>
      <Section2
        backgroundColor={section2Color}
        className={animateSection2 ? "animate" : ""}
        isActive={isSection1Active}
      >
        <div className='center'>
          <Title>About Me</Title>
          <Name>이 인 영</Name>
          <P>Front-End Developer</P>
          <hr />

          <div className='inner'>
            <AiOutlineCalendar size='30' />
            &nbsp;
            <p>96.01.12</p>
          </div>

          <div className='inner'>
            <BsTelephoneFill size='30' />
            &nbsp;
            <p>010-5300-8219</p>
          </div>

          <div className='inner'>
            <AiOutlineMail size='30' />
            &nbsp;
            <p>yeooong12@naver.com</p>
          </div>
        </div>

        {showTopButton && (
          <Link to='Section1' smooth={true} duration={800}>
            <TopBtn>Top</TopBtn>
          </Link>
        )}
      </Section2>
    </Element>
  );
}

export default About;

