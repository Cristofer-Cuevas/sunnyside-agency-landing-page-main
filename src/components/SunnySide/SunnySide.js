import React from "./SunnySide";

import "./assets/css/normalize.css";
import "./assets/css/SunnySide.css";

import logo from "./assets/images/logo.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";

const SunnySide = (props) => {
  console.log(props.testimonials);
  return (
    <>
      <header className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
          <img className="hamburgerIcon" src={hamburgerIcon} alt="a hamburger icon" />
        </div>
        <div className="modalContainer">
          <ul className="menuContainer">
            <li className="muneItem">About</li>
            <li className="muneItem">Services</li>
            <li className="muneItem">Projects</li>
            <li className="muneItem">CONTACT</li>
          </ul>
        </div>
        <div className="titleContainer">
          <h1 className="title">
            {" "}
            <span className="we-are">WE ARE</span>CREATIVES
          </h1>
        </div>
      </header>
      <main>
        {" "}
        <Main />
        <Testimonials key="holae" testimonials={props.testimonials} />
      </main>
    </>
  );
};

const Main = () => {
  return (
    <>
      <div className="imagesGridContainer">
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
            <h2 className="standOutTitle">Stand Out to the audience</h2>
            <p className="standOutParagraph">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extand your brand in digital places.</p>
          </div>
          <a className="standOutLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">
            {" "}
            LEARN MORE
          </a>
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
    <div className="testimonialContainers">
      <h3 className="testimonialTitle">CLIENT TESTIMONAILS</h3>
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
  );
};

export default SunnySide;
