import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  pageSize = 20,
  mode,
  category = "sports",
  country,
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let apiKey = process.env.REACT_APP_API_KEY;

  const capitalize = (str) => {
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  };

  const getNewsData = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${pageSize}`;
    setProgress(50);
    if (!JSON.parse(localStorage.getItem(`${category}`))?.articles?.length) {
      let data = await fetch(api);
      let parseData = await data.json();
      setProgress(80);
      localStorage.setItem(`${category}`, JSON.stringify(parseData));
      setLoading(true);
      setArticles(parseData.articles);
      setTotalResult(parseData.totalResults);
      setCurrentPage(currentPage + 1);
      setLoading(false);

      if (parseData.status === "error") {
        alert(
          "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."
        );
      }
    } else {
      let getData = JSON.parse(localStorage.getItem(`${category}`));
      setProgress(80);
      setArticles(getData.articles);
      setTotalResult(getData.totalResults);
      setCurrentPage(currentPage + 1);
    }
    setProgress(100);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${pageSize}`;
    setLoading(true);

    if (
      !JSON.parse(localStorage.getItem(`${category}`))?.articles?.length ||
      articles?.length !== totalResult
    ) {
      let data = await fetch(api);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResult(parseData.totalResults);
      setCurrentPage(currentPage + 1);
    } else {
      let getData = JSON.parse(localStorage.getItem(`${category}`));
      setArticles(articles.concat(getData.articles));
      setTotalResult(getData.totalResults);
      setCurrentPage(currentPage + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewsData();
    document.title = `${capitalize(category)} - NewsApp`;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1
        className={`container my-5 text-center text-decoration-underline pt-5 text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        Top Headlines For {capitalize(category)}
      </h1>

      <div className="container">
        <div className="row g-5">
          {articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItems
                  mode={mode}
                  img={
                    !ele.urlToImage
                      ? "https://www.financialexpress.com/wp-content/uploads/2023/06/Breaking-news-new-feature-image-6.jpg?w=1200"
                      : ele.urlToImage
                  }
                  author={!ele.author ? "UnKnown" : ele.author}
                  publishedAt={!ele.publishedAt ? "" : ele.publishedAt}
                  title={!ele.title ? "Title Not Declared !" : ele.title}
                  dis={
                    !ele.description
                      ? "Description Not Declared !"
                      : ele.description
                  }
                  source={ele.source}
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      ></InfiniteScroll>
    </>
  );
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
