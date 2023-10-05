import { useContext } from "react";
import { UseContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UseContext);

  return (
    <>
      <h1>HomePage de {user?.name}</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
