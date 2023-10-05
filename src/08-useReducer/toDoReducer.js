export const toDoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...inicialState, action.payload];

    case "DELETE_TODO":
      return inicialState.filter((todo) => todo.id !== action.payload.id);

    case "TOOGLE_TODO":
      return inicialState.map((toDo) => {
        if (toDo.id == action.payload.id) {
          return {
            ...toDo,
            done: !toDo.done,
          };
        }

        return toDo;
      });

    default:
      return inicialState;
  }
};
