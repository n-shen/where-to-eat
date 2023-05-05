import React, { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

const StateContext = createContext();

const shared_info = {
  serverURL: "http://localhost:8080",
  apiURL: "http://localhost:8080/api/v1",
};

const socket = io(shared_info.serverURL);

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [userProfile, setUserProfile] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        socket,
        shared_info,
        userProfile,
        setUserProfile,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
