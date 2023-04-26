import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieListPage from "./components/movieListPage";
import LessonMenu from "./components/lessonMenu";
import MovieDetailsWrapper from "./components/movieDetailsWrapper";
import SearcherWrapper from "./components/searcherWrapper";
import MovieNotFound from "./components/movieNotFound";

export const AppContext = createContext();
const contextValue = {
  config: {
    url: "http://localhost:4000/movies",
  },
};

export default function App() {
  return (
    <AppContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MovieListPage />}>
            <Route path=":movieId" element={<MovieDetailsWrapper />} />
            <Route path="" element={<SearcherWrapper />} />
            <Route path="notfound" element={<MovieNotFound />} />
          </Route>
          <Route path="lesson/*" element={<LessonMenu />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
