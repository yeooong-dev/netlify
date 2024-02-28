import React, { useEffect, useState } from "react";
import { Section1, Center, TextBox } from "../styled/StyleApp";
import { Element, Link } from "react-scroll";
import star from "../img/c1_s1.png";

function Main() {
  // typing animation
  const [typingText, setTypingText] = useState("");
  const text = "함께 일하기 즐거운";
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
      setLeft((prevLeft) => {
        let newLeft = prevLeft - 10;
        if (newLeft < -300) {
          newLeft = window.innerWidth;
        }
        return newLeft;
      });
      setTop((prevTop) => {
        let newTop = prevTop + 7;
        if (newTop > window.innerHeight) {
          newTop = 0;
        }
        return newTop;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const starStyle = {
    position: "fixed",
    left: `${left}px`,
    top: `${top}px`,
    width: "400px",
  };

  // 도형 애니메이션
  const [isCircle, setIsCircle] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsCircle((prevIsCircle) => !prevIsCircle);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Element name='Section1' id='Section1'>
      <Section1>
        <Center>
          <div className={`shape ${isCircle ? "circle" : "square"}`}>
            <img src={star} style={starStyle} />
          </div>
          <TextBox>
            <h1>Portfolio</h1>
            <span>{typingText}</span>
            <Link
              to='Section2'
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
            >
              <div>
                <button className='animated-circle'>↓</button>
              </div>
            </Link>
          </TextBox>
        </Center>
      </Section1>
    </Element>
  );
}

export default Main;
