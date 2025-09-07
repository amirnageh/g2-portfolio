import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/circle.css";
import "./styles/component.css";
import "./styles/style.css";
import "./styles/magenta.css";
import "./styles/global.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </BrowserRouter>
  </StrictMode>
);
