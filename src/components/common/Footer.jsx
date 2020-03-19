import React from "react";
import { IoLogoGithub } from "react-icons/io";
// import { FaGithub } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className="height-50px"></div>
      <div className="footer flex-container">
        {/* <div className="height-100px"></div> */}
        <div id="logo">
          <IoLogoGithub style={{ marginTop: "3px" }} />
        </div>
        {/* <FontAwesomeIcon icon={faGithub} style={{ marginRight: "5px" }} /> */}
        <a
          href="https://www.github.com"
          target="blank"
          className="txt-dec-none"
        >
          <p>Fork on Github</p>
        </a>
      </div>
    </>
  );
}

export default Footer;
