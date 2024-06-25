import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { MenuContextProvider } from "./context/MenuContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MenuContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MenuContextProvider>
    </Provider>
  </React.StrictMode>
);
