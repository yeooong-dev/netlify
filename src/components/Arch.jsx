// Arch 컴포넌트
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Left, Right, Section5 } from "../styled/StyleArch";
import { Width } from "../styled/StyleAbout";

function Arch() {
  const [animateSection5, setAnimateSection5] = useState(false);

  const handleScroll = () => {
    const section5 = document.getElementById("Section5");
    if (section5) {
      const rect = section5.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setAnimateSection5(isVisible);
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
    <Element name='Section5' id='Section5'>
      <Width>
        <Section5>
          <h1>Archiving</h1>
          <Left $animateSection5={animateSection5}>
            <strong>GitHub</strong>
            <p>소스 코드 저장소</p>
            <a href='https://github.com/yeooong-dev' target='_blank'>
              https://github.com/yeooong-dev
            </a>
          </Left>
          <Right $animateSection5={animateSection5}>
            <strong>Notion</strong>
            <p>블로깅</p>
            <a
              href='https://www.notion.so/InYeong-e119ac40fd2847cbb6448e8caacac7aa'
              target='_blank'
            >
              https://www.notion.so/InYeong
            </a>
          </Right>
        </Section5>
      </Width>
    </Element>
  );
}

export default Arch;
