import React, { useEffect, useRef } from "react";
import { Section3 } from "../styled/StyleSkills";
import { Element } from "react-scroll";
import htmlImg from "../img/html.png";
import cssImg from "../img/css3.png";
import jsImg from "../img/javascript.png";
import jqueryImg from "../img/jquery.png";
import reactImg from "../img/react.png";
import reduxImg from "../img/redux.png";
import typescript from "../img/type.png";
import styledImg from "../img/styled.png";
import boot from "../img/bootstrap.svg";
import nodeImg from "../img/node.png";
import awsImg from "../img/aws.png";
import mysql from "../img/mysql.png";
import git from "../img/git.png";
import github from "../img/github.png";
import slack from "../img/slack.png";
import figma from "../img/figma.png";
import { useState } from "react";
import { Width } from "../styled/StyleAbout";

function Skills() {
  const ref = useRef(null);
  const [section3Color, setSection3Color] = useState("#597da8");

  useEffect(() => {
    const handleScroll = () => {
      const section4 = document.getElementById("Section4");
      if (!section4) return;
      const section4Rect = section4.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 1; 
      setSection3Color(
        section4Rect.top <= triggerPoint && section4Rect.top > 0
          ? "#f0f0f0"
          : "#a2a4a3"
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Element name='Section3' id='Section3'>
      <Width>
        <Section3 ref={ref} backgroundColor={section3Color}>
          <h1>Skills</h1>
          <div className='left'>
            <div className='front'>
              <p>Front-end</p>
              <img src={htmlImg} alt='HTML' />
              <img src={cssImg} alt='CSS' />
              <img src={jsImg} alt='JS' />
              <img src={jqueryImg} alt='jquery' />
              <img src={reactImg} alt='react' />
              <img src={reduxImg} alt='redux' />
              <img src={typescript} alt='typescript' />
              <img src={styledImg} alt='styled-components' />
              <img src={boot} alt='bootstrap' />
            </div>
          </div>

          <div className='right'>
            <div className='back'>
              <p>Back-end</p>
              <img src={nodeImg} alt='node.js' />
            </div>
            <div className='dev'>
              <p>DevOps</p>
              <img src={awsImg} alt='aws' />
              <img src={mysql} alt='mysql' />
            </div>
            <div className='col'>
              <p>Collaboration & Tools</p>
              <img src={git} alt='git' />
              <img src={github} alt='github' />
              <img src={slack} alt='slack' />
              <img src={figma} alt='figma' />
            </div>
          </div>
        </Section3>
      </Width>
    </Element>
  );
}

export default Skills;
