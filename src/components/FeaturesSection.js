import React from "react";
import { FcApproval } from "react-icons/fc";
import { FaRegClock, FaChartLine, FaBullseye } from "react-icons/fa";
import "../components/featuresection.css"
function FeatureSection() {
  const features = [
    {
      icon: <FaRegClock size={50} color="#FCB316" />,
      title: "Cost & Time Efficiency",
    },
    {
      icon: <FaChartLine size={50} color="#FCB316" />,
      title: "Improved Reporting and Analytics",
    },
    {
      icon: <FaBullseye size={50} color="#FCB316" />,
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
