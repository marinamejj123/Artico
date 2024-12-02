import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";
import ShoppingCart from "./components/ShoppingCart";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"  

import Nav from './components/Nav';


import Resume2 from "./components/Resume2";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";

import HomePage from "./components/Homepage";


/*
const App = () => {
  return (
    <>
      <div><Banner/>   </div>
      

      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Resume2" element={<Resume2 />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default App;*/
const App = () => {
  return (
    <BrowserRouter>
      {/* Menú de navegación: visible en todas las páginas */}
      <Nav />
      {/* Rutas para las diferentes páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Resume2" element={<Resume2 />} />
        <Route path="/Aboutme" element={<Aboutme/>} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>

      {/* Pie de página */}
      <div className="mt-10">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;