import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const loginHandler = () => setLogin(!login);
  return (
    <AuthContext.Provider value={{ login, setLogin, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
