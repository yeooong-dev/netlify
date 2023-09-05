import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Head } from "../styled/StyleApp";

function Header() {
  const [activeMenu, setActiveMenu] = useState("main");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const menuMap = {
      Section1: "main",
      Section2: "about",
      Section3: "skills",
      Section4: "edu",
      Section5: "arch",
      Section6: "projects",
    };

    const sectionIndices = {
      main: 0,
      about: 1,
      skills: 2,
      edu: 3,
      arch: 4,
      projects: 5,
    };

    const observerOptions = {
      root: null,
      threshold: 0.4,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(menuMap[entry.target.id]);
          document.documentElement.style.setProperty(
            "--active-section",
            sectionIndices[menuMap[entry.target.id]]
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      "Section1",
      "Section2",
      "Section3",
      "Section4",
      "Section5",
      "Section6",
    ];
    sections.forEach((sectionId) => {
      observer.observe(document.getElementById(sectionId));
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <ul>
          <li className={activeMenu === "main" ? "active" : ""}>
            <Link
              to='Section1'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("main")}
            >
              Portfolio
            </Link>
          </li>
          <li className={activeMenu === "about" ? "active" : ""}>
            <Link
              to='Section2'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("about")}
            >
              About
            </Link>
          </li>
          <li className={activeMenu === "skills" ? "active" : ""}>
            <Link
              to='Section3'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li className={activeMenu === "edu" ? "active" : ""}>
            <Link
              to='Section4'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("edu")}
            >
              Profile
            </Link>
          </li>
          <li className={activeMenu === "arch" ? "active" : ""}>
            <Link
              to='Section5'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("arch")}
            >
              Archiving
            </Link>
          </li>
          <li className={activeMenu === "projects" ? "active" : ""}>
            <Link
              to='Section6'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("projects")}
            >
              Projects
            </Link>
          </li>
        </ul>{" "}
      </Head>
    </>
  );
}

export default Header;
