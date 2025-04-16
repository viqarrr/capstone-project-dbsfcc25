import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext";
import { SearchProvider } from "./context/searchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SearchProvider>
  </StrictMode>
);
