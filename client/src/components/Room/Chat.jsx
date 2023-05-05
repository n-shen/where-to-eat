import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";

const Chat = ({ rid }) => {
  const {
    socket,
    selectionBegin,
    setSelectionBegin,
    waiting,
    setWaiting,
    history,
    setHistory,
  } = useStateContext();
  const [message, setMessage] = useState("");
  // const [inMessages, setInMessages] = useState([]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("chat-in", (message) => {
        console.log("[C-chat-in]", "Partner: " + message);
        if (message === "Got you, let's begin!") {
          setWaiting(false);
          setSelectionBegin(true);
        }
        setHistory((history) => [...history, "Partner: " + message]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("server-notice", (message) => {
        console.log(message);
        if (message === "Server: partner joined the room!") {
          socket.emit("chat-out", "Got you, let's begin!", rid);
          setHistory((history) => [...history, "[Me]: Got you, let's begin!"]);
          setWaiting(false);
          setSelectionBegin(true);
        }
      });
    }
  }, [socket]);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("chat-out", message, rid);
    console.log("[C-chat-out]", "[Me]: " + message);
    setHistory((history) => [...history, "[Me]: " + message]);
    setMessage("");
  };

  return (
    <>
      <div className="h-[40vh]">
        <div className="h-full overflow-auto w-full rounded-lg shadow">
          <ul className="overflow-auto scroll-auto divide-y-1 divide-gray-100">
            {history &&
              history.map((d, idx) => (
                <li className="text-left text-sm pl-2 text-blue-700" key={idx}>
                  {d}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="h-1/6">
        <form className="w-full" onSubmit={handleSend}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="chat-message"
              required
              value={message}
              placeholder="How is it going"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
