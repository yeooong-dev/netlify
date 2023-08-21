import { Link, Element } from "react-scroll";
import { TopBtn } from "../styled/StyleApp";
import { Name, P, Section2, Title } from "../styled/StyleAbout";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function About() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [animateSection2, setAnimateSection2] = useState(false);

  const handleScroll = () => {
    const section2 = document.getElementById("Section2");
    if (section2) {
      const rect = section2.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setAnimateSection2(isVisible);
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
      <Section2 className={animateSection2 ? "animate" : ""}>
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
