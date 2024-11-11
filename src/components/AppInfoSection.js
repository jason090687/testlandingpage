import React from "react";
import { FaPlay } from "react-icons/fa";
import "../components/appinfosection.css"

function AppInfoSection() {
  return (
    <div className="app-info-section">
      <div className="app-info-section__content">
        <div className="app-info-section__box">
          <div className="app-info-section__play-button">
            <FaPlay size={40} color="#ffffff" />
          </div>
        </div>
        <div className="app-info-section__text">
          <h2 className="app-info-section__title">CountMeIn Desktop App</h2>
          <p className="app-info-section__description">
            Lorem ipsum odor amet, consectetuer adipiscing elit. In feugiat
            tellus pretium sem interdum. Duis montes tellus sed velit; eu odio
            risus. Venenatis ante purus dignissim class mi. Augue ultrices
            ligula per faucibus iaculis gravida odio inceptos. Eros euismod
            venenatis maximus rutrum leo consectetur. Lorem ipsum odor amet,
            consectetuer adipiscing elit. In feugiat tellus pretium sem
            interdum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppInfoSection;
