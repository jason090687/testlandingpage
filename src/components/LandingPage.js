import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import model from "../assets/model.png";
import "../components/landingpage.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import FeatureSection from "./FeaturesSection";
import AppInfoSection from "./AppInfoSection";

function LandingPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation on component mount or refresh
    setAnimate(true);

    // Reset animation after it finishes (optional)
    const timer = setTimeout(() => setAnimate(false), 1500); // 1.5 seconds (animation duration + delay)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="landing-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar__header">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__links">
            <a href="/">Home</a>
            <a href="/">About CMI</a>
          </div>
          <div className="navbar__auth">
            <a href="/">Login</a>
            <button className="button button--signup">Sign Up</button>
          </div>
        </div>
      </div>
      <div className={`main-content ${animate ? "animate" : ""}`}>
        <div className="main-content__container">
          <div className="greeting-section">
            <h1 className="greeting-section__title">Welcome to CountMeIn.</h1>
            <p className="greeting-section__description">
              Lorem ipsum odor amet, consectetuer adipiscing elit. In feugiat
              tellus pretium sem interdum. Duis montes tellus sed velit; eu odio
              risus. Venenatis ante purus dignissim class mi. Augue ultrices
              ligula per faucibus iaculis gravida odio inceptos. Eros euismod
              venenatis maximus rutrum leo consectetur.
            </p>
            <button className="button button--get-started">Get Started</button>
            <div className="contact-info">
              <div className="contact-info__item">
                <FaPhoneAlt className="contact-info__icon" />
                <span>
                  Call us here:{" "}
                  <span className="contact-info__number">+639068793484</span>
                </span>
              </div>
              <span className="contact-info__divider">/</span>
              <div className="contact-info__item">
                <MdOutlineMail className="contact-info__icon" />
                <span>Email here: countmein@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="model-image">
            <img src={model} alt="3D model" />
          </div>
        </div>
      </div>
      <FeatureSection />
      <AppInfoSection/>
    </div>
  );
}

export default LandingPage;
