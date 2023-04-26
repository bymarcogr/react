import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import MovieListPage from "./components/movieListPage";
import LessonMenu from "./components/lessonMenu";
import Searcher from "./components/searcher";
import MovieDetails from "./components/movieDetails";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage />}>
          <Route path="" element={<Searcher />} />
          <Route path=":movieid" element={<MovieDetails />} />
        </Route>
        <Route path="lesson/*" element={<LessonMenu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
