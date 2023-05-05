import React, { useEffect } from "react";

import { useStateContext } from "../contexts/ContextProvider";
import { Footer, SearchForm, SearchResult } from "../components";
import { useSearchParams } from "react-router-dom";
import { Room } from "../components";

// import axios from "axios";

const Home = () => {
  const { shared_info, screenSize } = useStateContext();
  // const baseURL = shared_info.baseURL;

  const [sessionParameters] = useSearchParams();
  const rid = sessionParameters.get("room");

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      {!rid && (
        <>
          {/* <div className="mt-5 flex w-full justify-center"> */}
            <SearchForm />
          {/* </div> */}
          {/* <SearchResult /> */}
        </>
      )}

      {rid && <Room rid={rid} />}

      <Footer />
    </div>
  );
};

export default Home;
