import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const Intro = ({ rid }) => {
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
  } = useStateContext();

  useEffect(() => {
    if (socket.connected) {
      socket.on("game-ready-s", (message) => {
        // console.log(message);
        if (message === "start") {
          // console.log("starting game...");
          setWaiting(false);
          setGameBegin(true);
          setPartnerReady(true);
        } else {
          // console.log("ending game...");
          setWaiting(true);
          setGameBegin(false);
          setPartnerReady(false);
        }
      });
    }
  }, [socket]);

  const allBuckets = localStorage.getItem("room-" + rid + "-collections");

  return (
    <>
      <section className="h-full bg-white dark:bg-gray-900">
        <div className="h-full py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            <span className="text-blue-500">
              Let's play Rock Paper Scissors!
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            The winner of each round can cross off a restaurant.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 pb-5">
            <button
              onClick={() => {
                setGameIntroBegin(false);
                socket.emit("game-ready", rid, "start");
                if (partnerReady) {
                  setGameBegin(true);
                } else {
                  setWaiting(true);
                }
              }}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full rounded-lg shadow">
            <ul className="divide-y-1 divide-gray-100">
              {JSON.parse(allBuckets).map((d, idx) => (
                <li
                  className="text-center text-sm pl-2 text-blue-700"
                  key={idx}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
