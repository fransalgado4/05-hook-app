import { ToDoItem } from "./";

export const ToDoList = ({ toDos, onDeleteToDo, onToggleToDo }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onDeleteToDo={onDeleteToDo}
          onToggleToDo={onToggleToDo}
        />
      ))}
    </ul>
  );
};
