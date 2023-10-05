import { useContext } from "react";
import { UseContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UseContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() =>
          setUser({ id: 1, name: "Francisco", lastName: "Salgado" })
        }
      >
        Set User
      </button>
    </>
  );
};
