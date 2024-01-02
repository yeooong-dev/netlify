import { Element } from "react-scroll";
import {
  Career,
  Education,
  Line,
  Section4,
  Top,
  Training,
} from "../styled/StyleEdu";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Width } from "../styled/StyleAbout";

function Edu() {
  const ref = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showAnimation) {
          setShowAnimation(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [showAnimation]);

  return (
    <Element name='Section4' id='Section4'>
      <Width>
        <Section4 ref={ref}>
          <h1>Profile</h1>
          <Top className={showAnimation ? "onScreen" : ""}>
            <Education className={showAnimation ? "onScreen" : ""}>
              <b>Education</b>

              <p>양주 백석고등학교 졸업</p>
              <p>(2011.03 ~ 2014.02)</p>

              <br />
              <hr />
              <br />

              <p>서정대학교 경영학과 졸업 </p>
              <p>(2015.02 ~ 2017.02)</p>

              <br />
            </Education>
            <Line />

            <Career className={showAnimation ? "onScreen" : ""}>
              <b>Career</b>

              <p>디비손해보험 주식회사</p>
              <p>(2017-05~2017-06)</p>
              <p>사무보조(계약직)</p>

              <br />
              <hr />
              <br />

              <p>(주)마이디지털 티몬</p>
              <p>(2017-09~2018-03)</p>
              <p>사무직</p>

              <br />
              <hr />
              <br />

              <p>(주)b2bking</p>
              <p>(2018-05~2019-03)</p>
              <p>웹디자이너</p>

              <br />
              <hr />
              <br />

              <p>삼삼물산주식회사</p>
              <p>(2019-06~2019-08)</p>
              <p>웹디자이너</p>

              <br />
              <hr />
              <br />

              <p>(주)비오비코리아</p>
              <p>(2021-07~2022-11)</p>
              <p>웹디자이너</p>
            </Career>
            <Line />

            <Training className={showAnimation ? "onScreen" : ""}>
              <b>Training</b>

              <p>sbs 아케데미 컴퓨터 아트학원</p>
              <p>(2019-11~2020-05)</p>
              <p>웹디자이너 과정 수료</p>

              <br />
              <hr />
              <br />

              <p>항해99 부트캠프</p>
              <p>(2023-01~2023-04)</p>
              <p>프론트엔드 과정 수료</p>

              <br />
              <hr />
              <br />

              <p>포스코&코딩온</p>
              <p>(2023-04~2023-07)</p>
              <p>풀스택 과정 수료</p>
            </Training>
          </Top>
        </Section4>
      </Width>
    </Element>
  );
}

export default Edu;
