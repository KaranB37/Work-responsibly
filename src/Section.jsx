import React, { useState, useEffect, useRef } from "react";
import "./Section.css";
import "./index.css";
import Social from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";

const Section = () => {
  const typedRef = useRef(null);
  // eslint-disable-next-line
  const [isTyping, setIsTyping] = useState(true);
  const [showWhiteSheet, setShowWhiteSheet] = useState(true);

  useEffect(() => {
    // Hide the white sheet after the animation is done
    setTimeout(() => {
      setShowWhiteSheet(false);
    }, 1500);

    // Show the content after the fade-in animation is done
    setTimeout(() => {
      setIsTyping(false);
    }, 3000); // Adjust the timing to match the fade-in animation

    const options = {
      strings: [
        "A collection of resources for a healthy and balanced approach to work.",
      ],
      typeSpeed: 70, // Typing speed in milliseconds
      backSpeed: 50, // Erasing speed in milliseconds
      startDelay: 1000, // Delay before typing starts in milliseconds
      backDelay: 2000, // Delay before erasing starts in milliseconds
      loop: true, // Loop the typing animation
      showCursor: false, // Hide the typing cursor
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="custom-section ">
      {showWhiteSheet && <div className="white-sheet" />}
      <nav>
        <div className="left">Work Responsibly</div>
        <div className="right">
          <a href="/about">About</a>
          <a href="/suggest">Suggest a link</a>
        </div>
      </nav>

      <div className="content-wrapper">
        <h1>Work Responsibly</h1>
        <p>
          <span className="constant-text">— </span>
          <span ref={typedRef}></span>
          <span className="typed-cursor"></span>
        </p>
      </div>
      <div className="down">
        <span>
          <FontAwesomeIcon className="icon" icon={faArrowDown} /> Browse Topic
          and Resources
        </span>
      </div>
      <Social />
    </section>
  );
};

export default Section;
