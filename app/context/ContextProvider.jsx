import { createContext, useState } from "react";

export const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoWithSearch, setTodoWithSearch] = useState([]);

  return (
    <StateContext.Provider
      value={{
        todos,
        setTodos,
        todoWithSearch,
        setTodoWithSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
