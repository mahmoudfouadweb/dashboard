import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import CardNotification from "./CardNotification";
import avatar from "../data/avatar.jpg";

const Chat = () => {
  const { setIsProfile } = useStateContext();
  return (
    <div className=" bg-white dark:bg-secondary-dark-bg  absolute bottom-[-380px] left-0 w-80 h-96 rounded-xl">
      <div className="flex justify-between border-b-2 border-solid border-gray-200">
        <div className="notification-card  m-4 font-semibold ">
          User Profile
        </div>
        <button
          type="button"
          onClick={() => setIsProfile((prevState) => !prevState)}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl hover:drop-shadow-xl hover:bg-light-gray m-4"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div>
        <div className="e-card">
          <div className="e-card-header">
            <img src={avatar} className=" football e-card-corner w-1/3" />
            <div className="e-card-header-caption">
              <div className="e-card-header-title">Mahmoud Fouad</div>
              <div className="e-card-sub-title">
                Software Front-End Developer
              </div>
              <div className="e-card-sub-title italic">mfapolice@gmail.com</div>
            </div>
          </div>
        </div>
        <CardNotification title={"My Profile"} content="Account Settings" />
        <CardNotification title={"My Inbox"} content="Messaging & Emailing" />
        <CardNotification title={"My Tasks"} content="To-do and Daily Tasks" />
      </div>
    </div>
  );
};

export default Chat;
