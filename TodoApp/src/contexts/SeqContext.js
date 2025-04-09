// SeqContext.js (or you can place it in the same file, above the App component)

import { createContext, useContext } from "react";

export const SeqContext = createContext();

export const useSeq = () => {
  return useContext(SeqContext);
};
