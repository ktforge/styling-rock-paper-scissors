import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

// hook react up to the <main id="app"> in index.html
createRoot(document.getElementById("app")).render(<App />);
