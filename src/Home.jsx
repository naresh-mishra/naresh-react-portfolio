import React from "react";
import PropTypes from "prop-types";
import image from "../images/bg-png.webp";

const Home = ({ name, title }) => {
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
        backgroundColor:"#f4f2f2", // Allows wrapping on smaller screens
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
        <h2>{title}</h2>
      </div>

      {/* Right Side - Background Image */}
      <div
        style={{
          flex: 1,
          minWidthwidth: "300px",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          marginRight:"10rem"
        }}
      />
    </section>
  );
};

Home.defaultProps = {
  name: "Naresh Chand Mishra",
  title: "Web Designer and Software Developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
