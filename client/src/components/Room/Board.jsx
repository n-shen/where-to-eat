import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useStateContext } from "../../contexts/ContextProvider";
import Selection from "./Selection";
import Intro from "./Intro";
import Game from "./Game";
import Cross from "./Cross";
import Final from "./Final";

const Board = ({ rid }) => {
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
    displayCross,
    setDisplayCross,
    setPartnerReady,
    displayFinal,
    setDisplayFinal,
  } = useStateContext();
  const [socketId, setSocketId] = useState("");
  const [isCapacityFull, setIsCapacityFull] = useState(false);

  useEffect(() => {
    if (socket.connected) {
      setSocketId(socket.id);
      console.log(socket.id, "joining room", rid);
      setWaiting(true);
      socket.emit("join-room", rid);
    }
  }, [socket]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("remove-result-s", (message) => {
        console.log(message);
        setWaiting(false);
        setGameBegin(true);
        setPartnerReady(false);
        localStorage.setItem("room-" + rid + "-collections", message);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("end-session-s", (message) => {
        console.log(message);
        setWaiting(false);
        setGameBegin(false);
        setPartnerReady(false);
        setSelectionBegin(false);
        setDisplayCross(false);
        setDisplayFinal(message);
      });
    }
  }, [socket]);

  return (
    <>
      {!isCapacityFull && (
        <div className="h-[80vh] p-5 border-2">
          <div className="h-full grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-2 rounded-lg col-span-2 row-span-2">
              {selectionBegin && <Selection rid={rid} />}
              {waiting && (
                <div className="pt-10">
                  <p>Waiting for your partner...</p>
                </div>
              )}
              {gameIntroBegin && <Intro rid={rid} />}
              {gameBegin && <Game rid={rid} />}
              {displayCross && <Cross rid={rid} />}
              {displayFinal !== "" && <Final name={displayFinal} />}
            </div>
            <div className="h-full shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-2 rounded-lg">
              <Chat rid={rid} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
