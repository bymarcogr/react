import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import AppContext from "./components/appContext";

const contextValue = {
  config: {
    url: "http://localhost:4000/movies",
  },
};

React.useLayoutEffect = React.useEffect;

export default function App() {
  return (
    <AppContext.Provider value={contextValue}>
      <MemoryRouter>{AppRoutes}</MemoryRouter>
    </AppContext.Provider>
  );
}
