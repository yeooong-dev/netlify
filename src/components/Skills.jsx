import React, { useEffect, useRef } from "react";
import { Center, Section3 } from "../styled/StyleSkills";
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

function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("onScreen");
        } else {
          entry.target.classList.remove("onScreen");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Element name='Section3' id='Section3'>
      <Center>
        <h1>Skills</h1>
      </Center>

      <Section3 ref={ref}>
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
    </Element>
  );
}

export default Skills;
