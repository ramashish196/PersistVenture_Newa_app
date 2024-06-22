import React, { useEffect, useState } from "react";
import axios from "axios";

const News = (props) => {
  const category = props.category;
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const handlePageClick1 = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePageClick2 = () => {
    setCurrentPage(totalPages - 1);
  };
  const makeapiRequest = async () => {
    try {
      let url = `https://newsdata.io/api/1/latest?apikey=pub_47030cbccd83e80696f813886d3ab0dd05fd8&q=${category}&language=en`;
      // if (category) {
      //   url += `q=${category}`;
      // }
      // if (searchterm) {
      //   url += `q=${category}`;
      // }
      const res = await axios.get(url);
      const newsData = res.data.results;
      setNews(newsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    makeapiRequest();
  }, [category]);
  // console.log(news);
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + pageSize;
  const currentArticles = news.slice(startIndex, lastIndex);
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {currentArticles.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.image_url}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">{items.description}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                <a href={items.link} target="_blank">
                  Read more
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          type="submit"
          onClick={handlePageClick2}
          className="mx-8 p-2.5 px-4 text-white bg-purple-600 border-l rounded"
        >
          prevPage
        </button>
        <button
          type="submit"
          onClick={handlePageClick1}
          className="mx-8 p-2.5 px-4 text-white bg-purple-600 border-l rounded"
        >
          nextPage
        </button>
      </div>
    </>
  );
};

export default News;
