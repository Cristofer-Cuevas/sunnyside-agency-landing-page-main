/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "./SunnySide";

import "./assets/css/normalize.css";
import "./assets/css/SunnySide.css";

import logo from "./assets/images/logo.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";
import { useRef } from "react";

const SunnySide = (props) => {
  const menuContainer = useRef(null);

  const handleHamburgerIconClick = (e) => {
    menuContainer.current.classList.toggle("showMenuContainer");
  };

  return (
    <>
      <header className="headerContainer">
        <nav className="navContainer">
          <div className="logoContainer">
            <img className="logo" src={logo} alt="logo" />
            <img className="hamburgerIcon" src={hamburgerIcon} alt="a hamburger icon" onClick={handleHamburgerIconClick} />
          </div>
          <ul ref={menuContainer} className="menuContainer">
            <li className="menuItem">
              {" "}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                About
              </a>
            </li>
            <li className="menuItem">
              {" "}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                Services
              </a>{" "}
            </li>
            <li className="menuItem">
              {" "}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                Projects
              </a>{" "}
            </li>
            <li className="menuItem">
              {" "}
              <a className="contactLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                CONTACT
              </a>{" "}
            </li>
          </ul>
        </nav>
        <div className="titleContainer">
          <h1 className="title">
            {" "}
            <span className="we-are">WE ARE</span> CREATIVES
          </h1>
        </div>
      </header>
      <main>
        {" "}
        <Main />
        <Testimonials testimonials={props.testimonials} />
        <ImagesGrid />
        <Footer />
      </main>
    </>
  );
};

const Main = () => {
  return (
    <>
      <div className="imageGridContainers">
        {/* Transfom Container */}
        <div className="transformContainer">
          <div className="transformImgContainer"></div>
          <div className="transformTextContainer">
            <h2 className="transformTitle">Transform your brand</h2>
            <p className="transformParagraph">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a className="transformLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">
              {" "}
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Stand out Container */}
        <div className="standOutContainer">
          <div className="standOutImgContainer"></div>
          <div className="standOutTextContainer">
            <h2 className="standOutTitle">Stand Out to the right audience</h2>
            <p className="standOutParagraph">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extand your brand in digital places.</p>
            <a className="standOutLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">
              {" "}
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Graphic Container */}
        <div className="graphicContainer">
          <h2 className="graphicTitle">Graphic Design</h2>
          <p className="graphicParagraph">Great design makes you memorable. We deliver atwork that underscores your brand message and captures potential clients' attention.</p>
        </div>

        {/*Photography Container  */}
        <div className="photographyContainer">
          <h2 className="photographyTitle">Photography</h2>
          <p className="photographyParagraph">Increase your credibility by getting the most stunning hegh-quality photos that improve your business image.</p>
        </div>
      </div>
    </>
  );
};

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <h3 className="testimonialTitle">CLIENT TESTIMONAILS</h3>
      <div className="testimonialContainers">
        {props.testimonials.map((testimonial) => {
          return (
            <div className="testimonialSubContainer" key={testimonial.id}>
              <img className="testimonialUserImg" key={testimonial.userImg} src={testimonial.userImg} alt="user img" />
              <p className="testimonialUserParagraph" key={testimonial.userTestimonial}>
                {testimonial.userTestimonial}
              </p>
              <span className="testimonialUserName" key={testimonial.userName}>
                {testimonial.userName}
              </span>
              <span className="testimonialUserOcupation" key={testimonial.userOcupation}>
                {testimonial.userOcupation}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ImagesGrid = () => {
  return (
    <div className="imagesBottomContainer">
      <div className="milkBottels"></div>
      <div className="orange"></div>
      <div className="cone"></div>
      <div className="sugarCubes"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="logoFooter" src={logo} alt="logo" />
      <ul className="linkContainers">
        <li className="footerLink">About</li>
        <li className="footerLink">Services</li>
        <li className="footerLink">Projects</li>
      </ul>
      <ul className="socialMediaLinks">
        <li>
          <a className="facebookLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"></a>
        </li>
        <li>
          <a className="instagramLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"></a>
        </li>
        <li>
          <a className="twitterLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"></a>
        </li>
        <li>
          <a className="pinterestLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"></a>
        </li>
      </ul>
    </div>
  );
};

export default SunnySide;
