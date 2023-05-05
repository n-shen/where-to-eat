import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const Game = ({ rid }) => {
  const {
    socket,
    selectionBegin,
    setSelectionBegin,
    waiting,
    setWaiting,
    gameBegin,
    setGameBegin,
    gameIntroBegin,
    setGameIntroBegin,
    partnerReady,
    setPartnerReady,
    partnerAction,
    setPartnerAction,
    displayCross,
    setDisplayCross,
  } = useStateContext();

  useEffect(() => {
    if (socket.connected) {
      socket.on("game-action-s", (message) => {
        if (message === "rock") {
          console.log("partner: rock");
          setPartnerAction("rock");
        } else if (message === "paper") {
          console.log("partner: paper");
          setPartnerAction("paper");
        } else if (message === "scissor") {
          console.log("partner: scissor");
          setPartnerAction("scissor");
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("game-result-s", (message) => {
        if (message === "win") {
          console.log("partner: win");
          setPartnerAction("");
          setGameBegin(false);
          setWaiting(true);
        } else if (message === "lost") {
          console.log("partner: lost");
          setPartnerAction("");
          setWaiting(false);
          setGameBegin(false);
          setDisplayCross(true);
        } else if (message === "draw") {
          console.log("partner: draw");
          setPartnerAction("");
          setWaiting(false);
          setGameBegin(true);
        }
      });
    }
  }, [socket]);

  const allBuckets = localStorage.getItem("room-" + rid + "-collections");

  return (
    <>
      <section className="h-full bg-white dark:bg-gray-900 pt-10">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Select your action:
        </h3>
        <button
          type="button"
          onClick={() => {
            if (partnerAction === "") {
              socket.emit("game-action", rid, "rock");
              setGameBegin(false);
              setWaiting(true);
            } else {
              if (partnerAction === "scissor") {
                console.log("result-win");
                setGameBegin(false);
                setWaiting(false);
                // inform partner
                socket.emit("game-result", rid, "win");
                setPartnerAction("");
                setDisplayCross(true);
              } else if (partnerAction === "paper") {
                console.log("result-lost");
                setGameBegin(false);
                setWaiting(true);
                // inform partner
                socket.emit("game-result", rid, "lost");
                setPartnerAction("");
              } else if (partnerAction === "rock") {
                console.log("result-draw");
                setWaiting(false);
                // inform partner
                socket.emit("game-result", rid, "draw");
                setPartnerAction("");
              }
            }
          }}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Rock
        </button>
        <button
          type="button"
          onClick={() => {
            if (partnerAction === "") {
              socket.emit("game-action", rid, "paper");
              setGameBegin(false);
              setWaiting(true);
            } else {
              if (partnerAction === "scissor") {
                console.log("result-lost");
                setGameBegin(false);
                // inform partner
                socket.emit("game-result", rid, "lost");
                setPartnerAction("");
                setWaiting(true);
              } else if (partnerAction === "paper") {
                console.log("result-draw");
                setWaiting(false);
                setGameBegin(true);
                // inform partner
                socket.emit("game-result", rid, "draw");
                setPartnerAction("");
              } else if (partnerAction === "rock") {
                console.log("result-win");
                setWaiting(false);
                setGameBegin(false);
                // inform partner
                socket.emit("game-result", rid, "win");
                setPartnerAction("");
                setDisplayCross(true);
              }
            }
          }}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Paper
        </button>
        <button
          type="button"
          onClick={() => {
            if (partnerAction === "") {
              socket.emit("game-action", rid, "scissor");
              setGameBegin(false);
              setWaiting(true);
            } else {
              if (partnerAction === "rock") {
                console.log("result-lost");
                setGameBegin(false);
                // inform partner
                socket.emit("game-result", rid, "lost");
                setPartnerAction("");
                setWaiting(true);
              } else if (partnerAction === "scissor") {
                console.log("result-draw");
                setWaiting(false);
                setGameBegin(true);
                // inform partner
                socket.emit("game-result", rid, "draw");
                setPartnerAction("");
              } else if (partnerAction === "paper") {
                console.log("result-win");
                setWaiting(false);
                setGameBegin(false);
                // inform partner
                socket.emit("game-result", rid, "win");
                setPartnerAction("");
                setDisplayCross(true);
              }
            }
          }}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Scissor
        </button>
      </section>
    </>
  );
};

export default Game;
