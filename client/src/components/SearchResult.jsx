import React, { useEffect, useState } from "react";
import { ImLink } from "react-icons/im";

import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";

const SearchResult = () => {
  const { shared_info, queryResults, setQueryResults } = useStateContext();
  const baseURL = shared_info.baseURL;

  const [sharingUrl, setSharingUrl] = useState("/");
  const [activeLink, setActiveLink] = useState(false);

  const handleSharing = (ele) => {
    setActiveLink(true);
  };

  const cloud_ctms = [
    {
      thumbnail: "./images/pizza-cartoon.jpeg",
      title: "Dominos",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
    {
      thumbnail: "./images/burger-cartoon.png",
      title: "Burger King",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
    {
      thumbnail: "./images/cupcake-cartoon.jpeg",
      title: "Gigi's Cupcakes",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
    {
      thumbnail: "./images/hotdog-cartoon.gif",
      title: "Famous Hotdogs",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
    {
      thumbnail: "./images/taco-cartoon.jpeg",
      title: "Taco Bell",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
    {
      thumbnail: "./images/coffee-shop-cartoon.png",
      title: "Foxtail Coffee",
      distance: "12 miles",
      location: "123 Abc Ave",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      {queryResults && queryResults.length > 0 && (
        <div className="w-10/12 relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
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
              {queryResults &&
                queryResults.map((val, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td style={{ width: "100px", textAlign: "center" }}>
                        <img
                          src={val["image_url"]}
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
                        {val["name"]}
                      </td>
                      <td
                        style={{ textAlign: "center", fontWeight: "bold" }}
                        className="px-6 py-4"
                      >
                        {val["rating"]}
                      </td>
                      <td
                        style={{ textAlign: "center", fontWeight: "bold" }}
                        className="px-6 py-4"
                      >
                        {val["price"]}
                      </td>
                      <td className="px-1 py-4">
                        <NavLink to={val.url} target="_blank">
                          <ImLink />
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

      {(queryResults && queryResults.length === 0) ||
        (queryResults === null && (
          <div
            className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">
                No result to display, to search one:
              </span>
              <ul className="mt-1.5 ml-4 list-disc list-inside">
                <li>Fill restaurant keywords</li>
                <li>Fill location e.x. Los Angeles, distance e.x. 2 ...</li>
                <li>Click 'Search' Button</li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
