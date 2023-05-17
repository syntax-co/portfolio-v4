import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import App from "./App";
import Contact from "./Contact";
import About from './About';

import './css_files/styles.css';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <BrowserRouter >
    <Navbar />
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
