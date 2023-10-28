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
    setTimeout(() => {
      setShowWhiteSheet(false);
    }, 1000); // Faster animation

    setTimeout(() => {
      setIsTyping(false);
    }, 1500); // Faster animation

    const options = {
      strings: [
        "A collection of resources for a healthy and balanced approach to work.",
      ],
      typeSpeed: 40, // Faster typing speed
      backSpeed: 30, // Faster erasing speed
      startDelay: 500, // Reduced delay before typing starts
      backDelay: 1000, // Reduced delay before erasing starts
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
        <FontAwesomeIcon className="icon" icon={faArrowDown} />
        <span>Browse Topic and Resources</span>
      </div>
      <Social />
    </section>
  );
};

export default Section;
