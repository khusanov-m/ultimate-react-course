import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./HOC/App-HOC";
import App from "./CC/App-CC";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
