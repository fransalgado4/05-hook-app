import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Formulario Con CustomHook</h1>
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
      <input
        type="password"
        className="border mt-2 border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button
        onClick={onResetForm}
        className="block mt-2 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Reset
      </button>
    </>
  );
};
