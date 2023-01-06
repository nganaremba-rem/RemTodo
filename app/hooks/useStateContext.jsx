import { useContext } from "react";
import { StateContext } from "../context/ContextProvider";

const useStateContext = () => useContext(StateContext);

export default useStateContext;
