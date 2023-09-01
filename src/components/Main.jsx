/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Section1, Center } from "../styled/StyleApp";
import { Element, Link } from "react-scroll";
import star from "../img/c1_s1.png";

function Main() {
  // typing animation
  const [typingText, setTypingText] = useState("");
  const text = "함께 일하기 즐거운 개발자";
  const typingSpeed = 200;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += text[currentIndex];
      setTypingText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // star animation
  const [left, setLeft] = useState(window.innerWidth);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft((left) => {
        if (left < -200) {
          return window.innerWidth;
        }
        return left - 10;
      });
      setTop((top) => {
        if (top > window.innerHeight) {
          return 0;
        }
        return top + 7;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <Element name='Section1' id='Section1'>
      <Section1>
        <img
          src={star}
          style={{
            position: "absolute",
            left: `${left}px`,
            top: `${top}px`,
            width: "300px",
          }}
        />
        <Center>
          <div className='animated-circle'>
            <h1 className='circle'>Portfolio</h1>
          </div>
          <span>{typingText}</span>
          <Link to='Section2' spy={true} smooth={true} duration={2000}>
            <button>Scroll ↓</button>
          </Link>
        </Center>
      </Section1>
    </Element>
  );
}

export default Main;
