export const ToDoItem = ({ toDo, onDeleteToDo, onToggleToDo }) => {
  return (
    <li>
      <span
        className={`${toDo.done ? "line-through" : ""}`}
        onDoubleClick={() => onToggleToDo(toDo)}
      >
        {toDo.description}
      </span>
      <button onClick={() => onDeleteToDo(toDo)}>Borrar</button>
    </li>
  );
};
