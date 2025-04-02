import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link); // Track which link is active
  };

  return (
    <>
    <div className="header-container" >
      <a
        href="#home"
        className={`act ${activeLink === "home" ? "active" : ""}`}
        onClick={() => handleClick("home")}
      >
        Home
      </a>
      <a
        href="#about"
        className={`act ${activeLink === "about" ? "active" : ""}`}
        onClick={() => handleClick("about")}
      >
        About
      </a>
      <a
        href="#portfolio"
        className={`act ${activeLink === "portfolio" ? "active" : ""}`}
        onClick={() => handleClick("portfolio")}
      >
        Projects
      </a>
      <a
        href="#footer"
        className={`act ${activeLink === "footer" ? "active" : ""}`}
        onClick={() => handleClick("footer")}
      >
        Contact
      </a>
    </div>
    </>
  );
};

export default Header;
