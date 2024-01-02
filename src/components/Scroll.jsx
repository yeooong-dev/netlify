import React, { useEffect, useState, createRef } from "react";

const ScrollObserver = ({ children, sections }) => {
  const sectionRefs = Array(sections.length)
    .fill()
    .map(() => createRef());
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      sections.forEach((sectionId) => {
        observer.observe(document.getElementById(sectionId));
      });

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [sections]);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: sectionRefs[index],
          isActive: child.props.id === activeSection,
        })
      )}
    </div>
  );
};

export default ScrollObserver;
