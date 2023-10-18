import React, { useState, useEffect } from "react";
import "./Section.css";
import "./index.css";
import Social from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Section = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line
  const [setIsTyping] = useState(true);

  useEffect(() => {
    const textToType = [
      "A collection of resources for a healthy and balanced approach to work.",
    ];
    let currentText = "";
    let currentIndex = 0;
    let erase = false;

    const typeText = () => {
      if (erase) {
        currentText = textToType[currentIndex].substring(
          0,
          currentText.length - 1
        );
      } else {
        currentText = textToType[currentIndex].substring(
          0,
          currentText.length + 1
        );
      }

      setText(currentText);

      if (!erase && currentText === textToType[currentIndex]) {
        erase = true;
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            erase = false;
            currentIndex = (currentIndex + 1) % textToType.length;
          }, 7000);
        }, 7000);
      }

      if (erase && currentText === "") {
        erase = false;
        currentIndex = (currentIndex + 1) % textToType.length;
      }

      const speed = erase ? 40 : 70;
      setTimeout(typeText, speed);
    };

    typeText();
  }, []);

  return (
    <section className="custom-section">
      <nav>
        <div className="left">Work Responsibly</div>
        <div className="right">
          <a href="/about">About</a>
          <a href="/suggest">Suggest a link</a>
        </div>
      </nav>
      <div className="content-wrapper">
        <h1>Work Responsibly</h1>
        <p>— {text}</p>
      </div>
      <div className="down">
        <FontAwesomeIcon className="icon" icon={faArrowDown} />
        <span>Browse Topic and Resources</span>
      </div>
      <Social />
    </section>
  );
};

export default Section;
