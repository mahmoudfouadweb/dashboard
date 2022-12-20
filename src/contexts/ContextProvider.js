import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (e) => {
    setCurrentColor(e);
    setThemeSettings((prevState) => !prevState);
    localStorage.setItem("colorMode", e);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
    if (clicked === "cart") setIsCart(true);
    if (clicked === "notification")
      setIsNotification((prevState) => !prevState);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
        isCart,
        setIsCart,
        isNotification,
        setIsNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
