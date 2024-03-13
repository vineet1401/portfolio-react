import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Context.jsx";

import 'aos/dist/aos.css';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      
      <App />
    </ThemeProvider>
  </StrictMode>
);
