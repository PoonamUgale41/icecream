import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import About from"./views/About/About";
import Contact from"./views/Contact/Contact";
import Home from"./views/Home/Home";
import Ourservice from "./views/Ourservice/Ourservice";

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/about" element={<About /> } />
    <Route path="/contact" element={<Contact /> } />
    <Route path="/our-service" element={<Ourservice /> } />
  </Routes>
  </BrowserRouter>,
);
