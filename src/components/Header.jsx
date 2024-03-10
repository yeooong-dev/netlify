import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Head } from "../styled/StyleApp";

function Header() {
  const [activeMenu, setActiveMenu] = useState("main");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const sections = [
    "Section1",
    "Section2",
    "Section3",
    "Section4",
    "Section5",
    "Section6",
    "Section7",
  ];

  const menuMap = {
    Section1: "main",
    Section2: "about",
    Section3: "skills",
    Section4: "edu",
    Section5: "arch",
    Section6: "projects",
    Section7: "Contact",
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        let sectionTop = section.getBoundingClientRect().top + window.scrollY;
        let sectionBottom = sectionTop + section.offsetHeight;

        if (sectionTop <= scrollPosition && sectionBottom > scrollPosition) {
          setActiveMenu(menuMap[sectionId]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
          <li className={activeMenu === "Contact" ? "active" : ""}>
            <Link
              to='Section7'
              smooth={true}
              duration={1200}
              onClick={() => handleMenuClick("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Head>
    </>
  );
}

export default Header;
