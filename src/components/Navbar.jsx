import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Button, Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { IconBase } from "react-icons/lib";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = ({ setIsNotification }) => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    isCart,
    isNotification,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex relative">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          dotColor={"#03c9d7"}
          color={currentColor}
          onClick={() => console.log("cart")}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"} position={"BottomCenter"}>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className=" rounded-full w-8 h-8 " />
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-semibold ml-1 text-14">
              Mahmoud
            </span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && isCart ? <Cart /> : " "}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && isNotification ? <Notification /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
