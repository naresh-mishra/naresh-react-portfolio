import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import image from "../images/bg-png.webp";
import Typed from "typed.js";

const Home = ({ name, title }) => {
  const typedElement = useRef(null); // Create a ref to attach to the title element

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(typedElement.current, {
      strings: title.split(" & "), // Split the title string by '&' to treat each part separately
      typeSpeed: 50, // Speed of typing
      backSpeed: 50, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Initial delay before typing starts
      loop: true, // Repeat the animation
      showCursor: true, // Show the cursor during typing
      contentType: 'html', // Allows HTML content to be typed (useful for adding extra styling)
    });

    // Cleanup typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [title]); // Run effect when title changes

  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "row", // Default: row layout for large screens
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        height: "100vh",
        width: "100%",
        padding: "0 4%", // Adds spacing between text and image
        flexWrap: "wrap",
        backgroundColor: "#f4f2f2", // Allows wrapping on smaller screens
      }}
    >
      {/* Left Side - Text Content */}
      <div
        style={{
          flex: 1,
          minWidth: "300px", // Ensures text doesn't shrink too much
        }}
      >
        <h1>{name}</h1>
        <h2>
          <span ref={typedElement}></span> {/* This is where the typing effect will appear */}
        </h2>
      </div>

      {/* Right Side - Background Image */}
      <div className="image-top"/>
    </section>
  );
};

Home.defaultProps = {
  name: "Naresh Chand Mishra",
  title: "Software Developer & Web Designer & Analyst", // Default title format
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
