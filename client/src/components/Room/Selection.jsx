import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Select from "react-select";

const Selection = ({ rid }) => {
  const {
    socket,
    selectionBegin,
    setSelectionBegin,
    waiting,
    setWaiting,
    setGameBegin,
    setGameIntroBegin,
    localStore,
  } = useStateContext();
  const [selectValueOne, setSelectValueOne] = useState("");
  const [selectValueTwo, setSelectValueTwo] = useState("");
  var technologyList = [];

  useEffect(() => {
    if (socket.connected) {
      socket.on("ex-selection-store", (message) => {
        console.log(message);
        if (message !== "") {
          console.log("storing...");
          localStorage.setItem("room-" + rid + "-collections", message);
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket.connected) {
      socket.on("ex-selection-done", (message) => {
        console.log(message);
        if (message !== "") {
          console.log("finalizing...");
          localStorage.setItem(
            "room-" + rid + "-collections",
            JSON.parse(message)
          );
          setWaiting(false);
          setGameIntroBegin(true);
        }
      });
    }
  }, [socket]);

  const handleConfirm = () => {
    console.log("submitting..");
    if (selectValueOne && selectValueTwo) {
      console.log("selected: ", [selectValueOne, selectValueTwo]);

      const lsp = localStorage.getItem("room-" + rid + "-collections");
      if (lsp) {
        console.log("ls-partners: ", JSON.parse(lsp));
        let old = JSON.parse(lsp);
        old.push(selectValueOne);
        old.push(selectValueTwo);
        localStorage.setItem(
          "room-" + rid + "-collections",
          JSON.stringify(old)
        );
        socket.emit(
          "done-selection",
          rid,
          JSON.stringify(localStorage.getItem("room-" + rid + "-collections"))
        );
        setWaiting(false);
        setSelectionBegin(false);
        setGameIntroBegin(true);
      } else {
        localStorage.setItem(
          "room-" + rid + "-collections",
          JSON.stringify([selectValueOne, selectValueTwo])
        );
        setSelectionBegin(false);
        setWaiting(true);
        if (socket.connected) {
          console.log(
            "exchanging info in room: ",
            rid,
            JSON.stringify([selectValueOne, selectValueTwo])
          );
          socket.emit(
            "ex-selection",
            rid,
            JSON.stringify([selectValueOne, selectValueTwo])
          );
        }
      }
    }
  };

  useEffect(() => {
    console.log(localStore);
    if (localStore)
      JSON.parse(localStore).forEach(function (element) {
        technologyList.push({ label: element, value: element });
      });
  }, [localStore]);

  return (
    <>
      <div className="h-full p-5 border-2">
        <div className="pb-10">
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select first option * required
          </label>
          <select
            onChange={(e) => {
              setSelectValueOne(e.target.value);
            }}
            id="countries_multiple"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>* required but can be duplicated</option>
            {localStore &&
              JSON.parse(localStore).map((als) => {
                const favd = JSON.parse(localStorage.getItem("fav_" + als));
                return (
                  <option key={favd[1]} value={favd[1]}>
                    {favd[1]} | Rating: {favd[2]} | {favd[3]}{" "}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="pb-10">
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select second option * required
          </label>
          <select
            onChange={(e) => {
              setSelectValueTwo(e.target.value);
            }}
            id="countries_multiple"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>* required name | rating | price</option>
            {localStore &&
              JSON.parse(localStore).map((als) => {
                const favd = JSON.parse(localStorage.getItem("fav_" + als));
                return (
                  <option key={favd[1]} value={favd[1]}>
                    {favd[1]} | Rating: {favd[2]} | {favd[3]}{" "}
                  </option>
                );
              })}
          </select>
        </div>
        <button
          type="button"
          onClick={handleConfirm}
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default Selection;
