import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import AppContext from "./components/appContext";

const contextValue = {
  config: {
    url: "http://localhost:4000/movies",
  },
};

export default function App() {
  return (
    <AppContext.Provider value={contextValue}>
      <BrowserRouter>{AppRoutes}</BrowserRouter>
    </AppContext.Provider>
  );
}
