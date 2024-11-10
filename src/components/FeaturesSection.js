import React from "react";
import { FcApproval } from "react-icons/fc";
import "../components/featuresection.css";

// Import images from the assets folder
import ClockImage from "../assets/Delivery Time.png";
import ChartImage from "../assets/Total Sales.png";
import TargetImage from "../assets/Target.png";

function FeatureSection() {
  const features = [
    {
      icon: <img src={ClockImage} alt="Clock" style={{ width: 100, height: 100 }} />,
      title: "Cost & Time Efficiency",
    },
    {
      icon: <img src={ChartImage} alt="Chart" style={{ width: 100, height: 100 }} />,
      title: "Improved Reporting and Analytics",
    },
    {
      icon: <img src={TargetImage} alt="Target" style={{ width: 100, height: 100 }} />,
      title: "Accurate Tracking",
    },
  ];

  return (
    <div className="feature-section">
      <div className="feature-section__container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-item__icon">{feature.icon}</div>
            <div className="feature-item__title">
              <FcApproval className="feature-item__approval-icon" />
              <span>{feature.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
