import React from "react";

const CardNotification = ({ title, content, img, time, icon }) => {
  return (
    <div>
      <div className="e-card cursor-pointer">
        <div className="e-card-header">
          {img && <img src={img} className=" football e-card-corner w-14" />}
          {icon}
          <div className="e-card-header-caption">
            <div className="e-card-header-title font-semibold">{title}</div>
            <div className="e-card-sub-title">{content}</div>
            <div className="e-card-sub-title italic">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNotification;
