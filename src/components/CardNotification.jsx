import React from "react";

const CardNotification = ({ title, content, img, time }) => {
  return (
    <div>
      <div className="e-card">
        <div className="e-card-header">
          <img src={img} className=" football e-card-corner w-14" />
          <div className="e-card-header-caption">
            <div className="e-card-header-title">{title}</div>
            <div className="e-card-sub-title">{content}</div>
            <div className="e-card-sub-title italic">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNotification;
