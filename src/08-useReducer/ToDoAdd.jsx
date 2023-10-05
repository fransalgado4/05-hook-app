import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({ onNewToDo }) => {
  const inputRef = useRef();

  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newToDo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewToDo(newToDo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="¿Qué hay que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit">Agregar</button>
    </form>
  );
};
