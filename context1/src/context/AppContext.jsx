import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const a = "A";
  const b = "B";
  const c = "C";
  const d = "D";
  const e = "E";
  const f = "F";

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      {children}
    </AppContext.Provider>
  );
};