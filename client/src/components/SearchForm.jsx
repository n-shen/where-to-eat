import { useState } from "react";
import axios from "axios";

const SearchForm = () => {
    // const { shared_info } = useStateContext();
    const baseURL = "";
    // const { dispatch } = useCustomizesContext();

    const [title, setTitle] = useState("");
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
                    ctmTitle: title,
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
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Description (optional)
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="decription"
                                    name="description"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
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