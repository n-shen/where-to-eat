import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { cities } from "../data/cities";

const SearchForm = () => {
    // const { shared_info } = useStateContext();
    const baseURL = "";
    // const { dispatch } = useCustomizesContext();

    const [keyword, setKeyword] = useState("");
    const [distance, setDistance] = useState(0);
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState(cities);
    const [autodetect, setAutodetect] = useState(false);
    const [description, setDescription] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    };

    const handleSave = (words_array) => {
        axios
            .post(
                `${baseURL}/ctm/post`,
                {
                    ctmTitle: keyword,
                    ctmDescription: description,
                    ctmWords: words_array,
                }
            )
            .then((response) => {
                setLoading(false);
                // console.log(response.data);
                if (response.data["success"]) {
                    setError("");
                    setMessage("A new dictionary has been created!");
                } else {
                    setError(response.data["message"]);
                    setMessage("");
                }
            });
    };

    const handleAutodetect = () => {
        setAutodetect((prevState) => {
            if (!prevState) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  console.log('Latitude:', position.coords.latitude);
                  console.log('Longitude:', position.coords.longitude);
      
                  setAutodetect(true); 
                },
                (error) => {
                  console.error(error);
                  setAutodetect(false); 
                }
              );
            } else {
              return !prevState;
            }
          });
      };

    //   const handleLocationChange = (e) => {
    //     setSearchTerm(e.target.value);
    //   };
      

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Find a place to eat
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error && (
                        <div role="alert" className="mb-5">
                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                An error occurred
                            </div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{error}</p>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div role="alert" className="mb-5">
                            <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
                                Success
                            </div>
                            <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                                <p>{message}</p>
                            </div>
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="keyword"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Keyword
                            </label>
                            <div className="mt-2">
                                <input
                                    id="keyword"
                                    name="keyword"
                                    type="text"
                                    required
                                    onChange={(e) => setKeyword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="distance"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Distance
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="distance"
                                    name="distance"
                                    type="number"
                                    onChange={(e) => setDistance(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="location"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Location
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label>
                                <input
                                    id="autodetect"
                                    name="autodetect"
                                    type="checkbox"
                                    onChange={handleAutodetect}
                                />
                                <span className="ml-2 text-sm font-medium leading-6 text-gray-900">Auto-detect my location</span>
                            </label>
                        </div>
                        
                        

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>

                            <button
                                type="reset"
                                onClick={() => {
                                    setMessage("");
                                    setError("");
                                }}
                                disabled={loading}
                                className="flex ml-3 w-1/3 justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchForm;