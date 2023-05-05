import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { cities } from "../data/cities";
import SearchResult from "./SearchResult";

const cityData = () => {
    const options = []
    for (let i = 0; i < cities.length; i++) {
        options.push({label: cities[i], value: i})
    }
    return options
}

const SearchForm = () => {
    // const { shared_info } = useStateContext();
    const baseURL = "";
    const cityOptions = cityData()
    const [keyword, setKeyword] = useState("");
    const [distance, setDistance] = useState(0);
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState(cities);
    const [enteredLocation, setEnteredLocation] = useState("");
    const [autodetect, setAutodetect] = useState(false);
    const [description, setDescription] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [restaurants, setRestaurants] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    };

    // const handleSave = (words_array) => {
    //     axios
    //         .post(
    //             `${baseURL}/ctm/post`,
    //             {
    //                 ctmTitle: keyword,
    //                 ctmDescription: description,
    //                 ctmWords: words_array,
    //             }
    //         )
    //         .then((response) => {
    //             setLoading(false);
    //             if (response.data["success"]) {
    //                 setError("");
    //                 setMessage("A new dictionary has been created!");
    //             } else {
    //                 setError(response.data["message"]);
    //                 setMessage("");
    //             }
    //         });
    // };

    const onClickSave = (event) => {
        event.preventDefault();
        setRestaurants([]);
        axios.post("http://localhost:8080/api/v1/query/get", {
            "location": enteredLocation,
            "keyword": keyword,
            "distance": distance,
            "category": category,
            "open_now": true,
            "ip_location": false
        })
            .then((response) => {
                console.log(response.data);
                setRestaurants(response.data.results.businesses);
                console.log(response.data.results.businesses);
                })
            .catch((error) => {
                console.log(error);
            });        
    }

    const onClickClear = () => {
        console.log("Inside on click clear function");
        setRestaurants([]);
        setMessage("");
        setError("");
        setKeyword("");
        setDistance("");
        setEnteredLocation("");
    }

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

    const handleTypeSelect = e => {

        setEnteredLocation(e.label);
    };

    return (
        <>
            <div className="mt-5 flex w-full justify-center">
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
                                    Distance (max 20 miles)
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="distance"
                                    name="distance"
                                    type="text"
                                    onChange={(e) => setDistance(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className=" items-center justify-between">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Category
                          </label>
                          <select
                            onChange={(e) => {
                              setCategory(e.target.value);
                            }}
                            id="countries_multiple"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                            <option>Select one</option>
                            <option value="italian">Italian</option>
                            <option value="coffee">Coffee</option>
                            <option value="korean">Korean</option>
                            <option value="thai">Thai Food</option>
                            <option value="chinese">Chinese</option>
                          </select>
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
                                <Select
                                    options={cityOptions}
                                    onChange={handleTypeSelect}
                                    // value={cityOptions.filter(function(option) {
                                    //     return option.value === enteredLocation;
                                    //   })}
                                    value={{label : enteredLocation}}
                                    searchable="true"
                                    placeholder={"Enter City"}
                                />
                            </div>
                        </div>

                        {/* <div>
                            <label>
                                <input
                                    id="autodetect"
                                    name="autodetect"
                                    type="checkbox"
                                    onChange={handleAutodetect}
                                />
                                <span className="ml-2 text-sm font-medium leading-6 text-gray-900">Auto-detect my location</span>
                            </label>
                        </div> */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={(event) => {onClickSave(event)}}
                                >
                                Save
                            </button>
                            <button
                                type="reset"
                                onClick={onClickClear}
                                disabled={loading}
                                className="flex ml-3 w-1/3 justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <div>
                {(restaurants.length > 0) ? (
                    <SearchResult restaurants = {restaurants} />
                    ) : (<div></div>)
                }
                
            </div>
        </>
    );
};

export default SearchForm;