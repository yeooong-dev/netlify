import { Link, Element } from "react-scroll";
import { TopBtn } from "../styled/StyleApp";
import { Name, P, Section2, Title, Width } from "../styled/StyleAbout";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function About({ isSection1Active }) {
  const [showTopButton, setShowTopButton] = useState(false);
  const [animateSection2, setAnimateSection2] = useState(false);

  const handleScroll = () => {
    const section2 = document.getElementById("Section2");

    if (!section2) return;

    const section2Rect = section2.getBoundingClientRect();
    
    if (
      !animateSection2 &&
      section2Rect.bottom > 0 &&
      section2Rect.top < window.innerHeight
    ) {
      setAnimateSection2(true);
    }

    if (section2Rect.bottom <= 0) {
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
    <>
      <Element name='Section2' id='Section2'>
        <Width>
          <Section2
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
          </Section2>
        </Width>
      </Element>

      {showTopButton && (
        <Link to='Section1' smooth={true} duration={800}>
          <TopBtn>Top</TopBtn>
        </Link>
      )}
    </>
  );
}

export default About;
