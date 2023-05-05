import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useStateContext } from "../../contexts/ContextProvider";
import Selection from "./Selection";
import Intro from "./Intro";
import Game from "./Game";

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

  return (
    <>
      {!isCapacityFull && (
        <div className="h-[80vh] p-5 border-2">
          <div className="h-full grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-gray-100 text-green-500 text-lg text-center p-2 rounded-lg">
              <div className="h-700">Your are connected: {socketId}</div>
              <div className="h-700">Your joined the room!</div>
            </div>
            <div className="shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-2 rounded-lg col-span-2 row-span-2">
              {selectionBegin && <Selection rid={rid} />}
              {waiting && (
                <div>
                  <p>Waiting for your partner...</p>
                </div>
              )}
              {gameIntroBegin && <Intro rid={rid} />}
              {gameBegin && <Game rid={rid} />}
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
