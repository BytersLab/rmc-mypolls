import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PollContextProvider } from "./contexts/Polls.context.jsx";
import { LoaderContextProvider } from "./contexts/Loader.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderContextProvider>
      <PollContextProvider>
        <App />
      </PollContextProvider>
    </LoaderContextProvider>
  </StrictMode>
);
