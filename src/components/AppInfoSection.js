import React from "react";
import "../components/appinfosection.css"
import VideoModel from "../assets/modelVideo.mp4"

function AppInfoSection() {
  return (
    <div className="app-info-section">
      <div className="app-info-section__content">
        <div className="app-info-section__box">
          <video className="video-rounded" width="700" autoPlay muted controls>
            <source src={VideoModel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="app-info-section__text">
          <h2 className="app-info-section__title">CountMeIn Desktop App</h2>
          <p className="app-info-section__description">
          Lorem ipsum odor amet, consectetuer adipiscing elit. In feugiat tellus pretium sem interdum. Duis montes tellus sed velit; eu odio risus. Venenatis ante purus dignissim class mi. Augue ultrices ligula per faucibus iaculis gravida odio inceptos. Eros euismod venenatis maximus rutrum leo consectetur Lorem ipsum odor amet, consectetuer adipiscing elit. In feugiat tellus pretium sem interdum. 
montes tellus sed velit; eu odio risus. Venenatis ante purus dignissim class mi. Augue ultrices ligula per faucibus iaculis gravida odio inceptos. Eros euismod venenatis maximus rutrum leo consectetur.Lorem ipsum odor amet, consectetuer adipiscing elit. In feugiat tellus pretium sem interdum. Duis montes tellus sed velit; eu odio risus. Venenatis ante purus dignissim class mi. Augue ultrices ligula per faucibus iaculis gravida odio inceptos. Eros euismod venenatis maximus rutrum leo consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppInfoSection;
