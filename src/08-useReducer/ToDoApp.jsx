import { ToDoList, ToDoAdd } from "./";
import { useToDos } from "../hooks/useToDos";

export const ToDoApp = () => {
  const { toDos, handleNewToDo, handleDeleteToDo, handleToggleToDo } =
    useToDos();

  return (
    <>
      <h1>
        ToDoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row-auto">
        <div className="col-span-7">
          <ToDoList
            toDos={toDos}
            onDeleteToDo={handleDeleteToDo}
            onToggleToDo={handleToggleToDo}
          />
        </div>
        <div className="col-span-5">
          <h4>Agregar TODO</h4>
          <hr />
          <ToDoAdd onNewToDo={handleNewToDo} />
        </div>
      </div>
    </>
  );
};
