import React, { useState } from "react";
import {
  useSearchParams,
  useNavigate,
  Outlet,
  createSearchParams,
} from "react-router-dom";

import Searcher from "./searcher";
export default function SearcherWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [searchString, setSearchString] = useState(
    searchParams.get("searchBy") === "title" ? searchParams.get("search") : ""
  );

  const handleOnMovieSearch = (searchStr) => {
    setSearchString(searchStr);
    const url = `/?${createSearchParams(axiosParams(searchStr)).toString()}`;
    setSearchParams(axiosParams(searchStr));
    console.log(url);
    navigate(url);
    window.location.reload(false);
  };

  const axiosParams = (searchStr) => {
    let params = {};

    if (searchStr !== "") {
      params["search"] = searchStr;
      params["searchBy"] = "title";
    }

    params["sortBy"] = "title";
    params["sortOrder"] = "asc";
    params["limit"] = 20;

    return params;
  };

  return (
    <>
      <Outlet />
      <Searcher
        onSearch={handleOnMovieSearch}
        textClassName={"search-input-text"}
        buttonClassName={"search-button text-uppercase"}
        searchQuery={searchString}
      ></Searcher>
    </>
  );
}
