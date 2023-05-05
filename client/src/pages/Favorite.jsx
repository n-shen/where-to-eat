import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ImLink } from "react-icons/im";

const Favorite = () => {
  const { shared_info, screenSize, localStore, setLocalStore } =
    useStateContext();
  const baseURL = shared_info.baseURL;

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <h1 className="text-center text-3xl font-bold pb-10">
        My favorite restaurants
      </h1>
      <div className="flex justify-center">
        <table className="w-10/12 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                style={{ textAlign: "center" }}
                scope="col"
                className="px-6 py-3"
              >
                Image
              </th>
              <th
                style={{ textAlign: "center" }}
                scope="col"
                className="px-6 py-3"
              >
                Name
              </th>
              <th
                style={{ textAlign: "center" }}
                scope="col"
                className="px-6 py-3"
              >
                Rating
              </th>
              <th
                style={{ textAlign: "center" }}
                scope="col"
                className="px-6 py-3"
              >
                Pricing
              </th>
            </tr>
          </thead>
          <tbody>
            {localStore &&
              JSON.parse(localStore).map((als) => {
                const favd = JSON.parse(localStorage.getItem("fav_" + als));
                console.log(favd);
                return (
                  <tr
                    key={favd}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td style={{ width: "100px", textAlign: "center" }}>
                      <img
                        src={favd[0]}
                        alt="Image description"
                        style={{
                          display: "inline-block",
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      className="px-6 py-4"
                    >
                      {favd[1]}
                    </td>
                    <td
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      className="px-6 py-4"
                    >
                      {favd[2]}
                    </td>
                    <td
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      className="px-6 py-4"
                    >
                      {favd[3]}
                    </td>
                    <td className="px-1 py-4">
                      <NavLink to={favd[4]} target="_blank">
                        <ImLink />
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Favorite;
