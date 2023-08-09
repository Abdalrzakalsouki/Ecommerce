import { createContext, useState } from "react";

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [ids, setIds] = useState([]);

  const addNewId = (newId) => {
    setIds([...ids, newId]);
  };

  return (
    <FavouriteContext.Provider value={{ ids, addNewId }}>
      {children}
    </FavouriteContext.Provider>
  );
};
