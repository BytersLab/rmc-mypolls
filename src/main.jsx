import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PollContextProvider } from "./contexts/Polls.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PollContextProvider>
      <App />
    </PollContextProvider>
  </StrictMode>
);
