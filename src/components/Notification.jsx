import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import CardNotification from "./CardNotification";
import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";
import avatar3 from "../data/avatar3.png";
import avatar4 from "../data/avatar4.jpg";

const Notification = () => {
  const { setIsNotification } = useStateContext();
  return (
    <div className=" bg-white dark:bg-secondary-dark-bg  absolute bottom-[-380px] left-[-210px] w-80 h-96 rounded-xl">
      <div className="flex justify-between border-b-2 border-solid border-gray-200">
        <div className="notification-card  m-4 font-semibold ">
          Notification
        </div>
        <button
          type="button"
          onClick={() => setIsNotification((prevState) => !prevState)}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl hover:drop-shadow-xl hover:bg-light-gray m-4"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <CardNotification
        title="Laura Callahan"
        content="Sales Coordinator and Representative"
        img={avatar2}
      />
      <CardNotification
        title="Mahmoud Fouad"
        content="Software Front-End Developer "
        img={avatar}
      />
      <CardNotification
        title="Yousef Mahmoud"
        content="Sales Coordinator and Representative"
        img={avatar3}
      />
      <CardNotification
        title="Laura Callahan"
        content="Sales Coordinator and Representative"
        img={avatar4}
      />
    </div>
  );
};

export default Notification;
