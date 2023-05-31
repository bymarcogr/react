import React, { useContext } from "react";

export const useAppContext = () => useContext(AppContext);

const defaultValue = {
  config: {
    url: "",
  },
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
