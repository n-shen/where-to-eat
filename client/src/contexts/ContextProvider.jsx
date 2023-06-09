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
  const [gameBegin, setGameBegin] = useState(false);
  const [gameIntroBegin, setGameIntroBegin] = useState(false);
  const [selectionBegin, setSelectionBegin] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [partnerReady, setPartnerReady] = useState(false);
  const [partnerAction, setPartnerAction] = useState("");
  const [displayCross, setDisplayCross] = useState(false);
  const [displayFinal, setDisplayFinal] = useState("");
  const [history, setHistory] = useState([
    ">> server >> Your are connected!",
    ">> server >> Maker sure you have at least one favorite restaurant in your list!",
    ">> server >> Feel free to chat with your friend!",
  ]);

  const [localStore, setLocalStore] = useState(null);

  const [queryResults, setQueryResults] = useState(null);

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
        selectionBegin,
        setSelectionBegin,
        waiting,
        setWaiting,
        gameIntroBegin,
        setGameIntroBegin,
        gameBegin,
        setGameBegin,
        partnerReady,
        setPartnerReady,
        partnerAction,
        setPartnerAction,
        displayCross,
        setDisplayCross,
        displayFinal,
        setDisplayFinal,
        queryResults,
        setQueryResults,
        localStore,
        setLocalStore,
        history,
        setHistory,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
