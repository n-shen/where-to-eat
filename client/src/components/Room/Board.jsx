import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useStateContext } from "../../contexts/ContextProvider";

const Board = ({ rid }) => {
  const { socket } = useStateContext();
  const [socketId, setSocketId] = useState("");

  useEffect(() => {
    if (socket.connected) {
      setSocketId(socket.id);
      socket.emit("chat", "hi there");
    }
  }, [socket]);

  return (
    <>
      <div className="h-[80vh] p-5 border-2">
        <div className="h-full grid grid-cols-3 gap-4 p-5">
          <div className="shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
            <div className="h-700">Your are connected: {socketId}</div>
          </div>
          <div className="shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-2 row-span-2">
            3
          </div>
          <div className="shadow-lg bg-gray-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
            <Chat rid={rid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
