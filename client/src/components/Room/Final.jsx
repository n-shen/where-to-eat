import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const Final = ({ name }) => {
  return (
    <>
      <section className="h-full bg-white dark:bg-gray-900">
        <div className="h-full py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Your final destination is:
          </h1>
          <span className="text-blue-500 text-4xl">{name}</span>
        </div>
      </section>
    </>
  );
};

export default Final;
