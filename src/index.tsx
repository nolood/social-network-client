import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app/app";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const container = createRoot(root);

container.render(<App />);
