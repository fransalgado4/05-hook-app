import { useState } from "react";
import { UseContext } from "./UserContext";

// const user = {
//   id: 1,
//   name: "Francisco",
//   lastName: "Salgado",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UseContext.Provider value={{ user, setUser }}>
      {/* <UseContext.Provider value={{ hola: "Mundo", user }}> */}
      {children}
    </UseContext.Provider>
  );
};
