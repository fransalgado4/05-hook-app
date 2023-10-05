const inicialState = [
  {
    id: 1,
    toDo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = inicialState, action = {}) => {
  if (action.type === "[TODO] add toDo") {
    return [...state, action.payload];
  }

  return state;
};

let toDos = todoReducer();

const newToDo = {
  id: 2,
  toDo: "Esnifar coca",
  done: false,
};

const addToDoAction = {
  type: "[TODO] add toDo",
  payload: newToDo,
};

toDos = todoReducer(toDos, addToDoAction);

console.log({ state: toDos });
