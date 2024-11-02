import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
("react-router-dom");
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routs/Routs";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
