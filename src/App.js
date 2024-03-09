import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";
import Arch from "./components/Arch";
import Project from "./components/Project";
import Header from "./components/Header";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [background, setBackground] = useState(
    "linear-gradient(to right, #000000, #303030)"
  );

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      const section4 = document.getElementById("Section3");
      if (section4) {
        const section4Top = section4.offsetTop;
        setBackground(
          position >= section4Top
            ? "#f0f0f0"
            : "linear-gradient(to right, #000000, #303030)"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        overflowX: "hidden",
        background: background,
        transition: "background 0.5s ease",
      }}
    >
      <Header />
      <Main id='Section1' />
      <About id='Section2' />
      <Skills id='Section3' />
      <Edu id='Section4' />
      <Arch id='Section5' />
      <Project id='Section6' />
    </div>
  );
}

export default App;
