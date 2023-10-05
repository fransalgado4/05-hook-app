import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Francisco",
    email: "Francisco@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //   console.log("Llamada de efecto.");
  }, []);

  useEffect(() => {
    //   console.log("Llamada de efecto cuando se cambain en el formulario.");
  }, [formState]);

  useEffect(() => {
    //   console.log("Llamada de efecto cuando se cambain en el email.");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="border mt-2 border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username == "Francisco4" && <Message />}
    </>
  );
};
