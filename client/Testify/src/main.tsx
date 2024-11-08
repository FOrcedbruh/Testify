import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/global.scss"
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./app/context/authContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
);
