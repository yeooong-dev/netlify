import React, { useEffect, useState } from "react";
import { Section1, Center, TextBox, Star } from "../styled/StyleApp";
import { Element, Link } from "react-scroll";
import starImage from "../img/c1_s1.png";

function Main() {
  // typing animation
  const [typingText, setTypingText] = useState("");
  const text = "Front-End Developer";
  const typingSpeed = 100;

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

  // 별똥별
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
        let newTop = prevTop + 5;
        if (newTop > window.innerHeight) {
          newTop = 0;
        }
        return newTop;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const starStyle = {
    position: "fixed",
    left: `${left}px`,
    top: `${top}px`,
    width: "300px",
  };

  // 도형 애니메이션
  const [isCircle, setIsCircle] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsCircle((prevIsCircle) => !prevIsCircle);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // 별
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const getRandomValue = (max) => Math.floor(Math.random() * max);

    const generateStars = () => {
      const stars = [];
      const starCount = 40; // 생성할 별의 개수
      for (let i = 0; i < starCount; i++) {
        const size = getRandomValue(3) + 1;
        const opacity = getRandomValue(3) + 0.5;
        const duration = getRandomValue(4) + 1;
        const animation = ["twinkling", "twinklingWithNoBoxShadow"][
          getRandomValue(2)
        ];
        const x = getRandomValue(window.screen.width);
        const y = getRandomValue(window.screen.height);

        stars.push({ x, y, size, opacity, duration, animation });
      }
      return stars;
    };

    setStars(generateStars());
  }, []);

  return (
    <Element name='Section1' id='Section1'>
      <Section1>
        {stars.map((star, index) => (
          <Star
            key={index}
            size={star.size}
            opacity={star.opacity}
            duration={star.duration}
            animation={star.animation}
            style={{ left: `${star.x}px`, top: `${star.y}px` }}
          />
        ))}
        <Center>
          <div className={`shape ${isCircle ? "circle" : "square"}`} />
          <img src={starImage} style={starStyle} />
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
