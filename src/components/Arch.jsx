import React from "react";
import { Element } from "react-scroll";
import { Left, Right, Section5 } from "../styled/StyleArch";
import { Width } from "../styled/StyleAbout";
import { useInView } from "framer-motion";

function Arch() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 100 });

  return (
    <Element name='Section5' id='Section5'>
      <Width>
        <Section5 ref={ref}>
          <h1>Archiving</h1>
          <Left animate={isInView}>
            <strong>GitHub</strong>
            <p>소스 코드 저장소</p>
            <a
              href='https://github.com/yeooong-dev'
              target='_blank'
              rel='noreferrer'
            >
              https://github.com/yeooong-dev
            </a>
          </Left>
          <Right animate={isInView}>
            <strong>Notion</strong>
            <p>블로깅</p>
            <a
              href='https://torch-wall-005.notion.site/InYeong-e119ac40fd2847cbb6448e8caacac7aa'
              target='_blank'
              rel='noreferrer'
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
