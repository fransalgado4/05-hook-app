import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("toDos") || []);
};

export const useToDos = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleNewToDo = (toDo) => {
    dispatch({ type: "ADD_TODO", payload: toDo });
  };

  const handleDeleteToDo = (toDo) => {
    dispatch({ type: "DELETE_TODO", payload: toDo });
  };

  const handleToggleToDo = (toDo) => {
    dispatch({ type: "TOOGLE_TODO", payload: toDo });
  };

  return {
    toDos,
    handleNewToDo,
    handleDeleteToDo,
    handleToggleToDo,
  };
};
