import React, { useState } from "react";
import News from "./News";
const Layout = () => {
  const [category, setCotegory] = useState("politcs");
  const [searchterm, setSearchterm] = useState("");
  const handleClick = (category) => {
    setCotegory(category);
    setSearchterm("");
  };
  const handleSearch = (event) => {
    event.prevenDefault();
    setCotegory("");
    setSearchterm(event.target.search.value);
  };
  return (
    <>
      <div className="flex items-center  gap-16 my-4">
        <div className="mx-8 p-2.5 px-4 text-white bg-purple-600 border-l rounded">
          <h3>News Portal</h3>
        </div>
        <div className="relative w-full lg:max-w-sm">
          <select className=" p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option
              onClick={() => {
                handleClick("politics");
              }}
            >
              Politics
            </option>
            <option
              onClick={() => {
                handleClick("sports");
              }}
            >
              Sport
            </option>
            <option
              onClick={() => {
                handleClick("entertainment");
              }}
            >
              Entertainment
            </option>
            <option
              onClick={() => {
                handleClick("business");
              }}
            >
              Business
            </option>
          </select>
        </div>
        <form
          className="flex border border-purple-200 rounded"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-purple-600 border-l rounded ">
            Search
          </button>
        </form>
      </div>
      <News handleClick={handleClick} />
    </>
  );
};

export default Layout;
