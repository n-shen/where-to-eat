import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { ImLink } from "react-icons/im";

import axios from "axios";

const SearchResult = () => {
    const baseURL = "shared_info.baseURL";

    const [sharingUrl, setSharingUrl] = useState("/");
    const [activeLink, setActiveLink] = useState(false);

    const handleSharing = (ele) => {
        setActiveLink(true);
    };

    const cloud_ctms = [{"title": "ABC restaurant", "location": "123 Abc Ave"}]

    return (
        <div className="flex w-full justify-center">
            {cloud_ctms && cloud_ctms.length > 0 && (
                <div className="w-10/12 relative overflow-x-auto">
                    {activeLink && (
                        <div
                            id="alert-3"
                            className="flex p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                            role="alert"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5"
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
                            <div className="ml-3 text-sm font-medium">
                                Restaruant has been added to favorites! (LocalStorage):{" "}
                                <a
                                    target="_blank"
                                    href={sharingUrl}
                                    className="font-semibold underline hover:no-underline"
                                >
                                    {sharingUrl}
                                </a>
                                .
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setSharingUrl("/");
                                    setActiveLink(false);
                                }}
                                className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                                data-dismiss-target="#alert-3"
                                aria-label="Close"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {cloud_ctms &&
                            cloud_ctms.map((val, index) => {
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
                                        <td className="px-6 py-4">{val.title}</td>
                                        <td className="px-6 py-4">{val.location}</td>
                                        <td className="px-1 py-4">
                                            <button
                                                onClick={() => handleSharing(val)}
                                                className="text-blue-700"
                                            >
                                                <ImLink />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            { cloud_ctms && cloud_ctms.length === 0 && (
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
                            <li>
                                Fill restaurant keywords
                            </li>
                            <li>Fill location, distance ...</li>
                            <li>Click 'Search' Button</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResult;