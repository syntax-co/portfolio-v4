import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import App from "./App";

import './css_files/styles.css';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Box>
      <Navbar />
      <App />
    </Box>
  </StrictMode>
);
