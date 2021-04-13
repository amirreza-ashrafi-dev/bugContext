import { createContext } from "react";

const BugsList = createContext({
  bugs: [],
  addBug: () => {},
  removeBug: () => {},
});

export default BugsList;
