import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { all } from "axios";

const Cross = ({ rid }) => {
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
    displayCross,
    setDisplayCross,
  } = useStateContext();

  const allBuckets = localStorage.getItem("room-" + rid + "-collections");
  let parsedBuckets = JSON.parse(allBuckets);
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <>
      <div className="h-full p-10 bg-white dark:bg-gray-900">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Choose one to remove
        </h3>
        <ul className="w-full  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {parsedBuckets[0] && (
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="list-radio-0"
                  type="radio"
                  onChange={(e) => setSelectedItem(e.target.value)}
                  value={parsedBuckets[0]}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-0"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {parsedBuckets[0]}
                </label>
              </div>
            </li>
          )}
          {parsedBuckets[1] && (
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="list-radio-1"
                  type="radio"
                  onChange={(e) => setSelectedItem(e.target.value)}
                  value={parsedBuckets[1]}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-1"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {parsedBuckets[1]}
                </label>
              </div>
            </li>
          )}

          {parsedBuckets[2] && (
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="list-radio-2"
                  type="radio"
                  onChange={(e) => setSelectedItem(e.target.value)}
                  value={parsedBuckets[2]}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-2"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {parsedBuckets[2]}
                </label>
              </div>
            </li>
          )}

          {parsedBuckets[3] && (
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="list-radio-3"
                  type="radio"
                  onChange={(e) => setSelectedItem(e.target.value)}
                  value={parsedBuckets[3]}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-3"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {parsedBuckets[3]}
                </label>
              </div>
            </li>
          )}
        </ul>
        <div className="pt-6">
          <button
            type="button"
            onClick={() => {
              let old = JSON.parse(allBuckets);
              const idx = old.indexOf(selectedItem, 0);
              if (idx > -1) old.splice(idx, 1);
              console.log(old);
              localStorage.setItem(
                "room-" + rid + "-collections",
                JSON.stringify(old)
              );
              setDisplayCross(false);
              setGameBegin(true);
              // inform partner game or final
              socket.emit("remove-result", rid, JSON.stringify(old));
            }}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Cross;
