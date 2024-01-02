import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";
import Arch from "./components/Arch";
import Project from "./components/Project";
import Header from "./components/Header";

function App() {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY <= 1080) {
        setTranslateY(-scrollY);
      } else {
        setTranslateY(-1080);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Main id='Section1' />
      <div
        id='AboutWrapper'
        style={{
          position: "absolute",
          top: "1080px",
          width: "100%",
          transform: `translateY(${translateY}px)`,
        }}
      >
        <About id='Section2' />
        <Skills id='Section3' />
        <Edu id='Section4' />
        <Arch id='Section5' />
        <Project id='Section6' />
      </div>
    </div>
  );
}

export default App;
