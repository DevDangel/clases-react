import ReactDOM from "react-dom/client";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./components/Inicio";
import Blogs from "./components/Blogs";
import Contacto from "./components/Contacto";
import NoPagina from "./components/NoPagina";
import Quienes from "./components/Quienes";
import './index.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="quienes" element={<Quienes />} />
          <Route path="*" element={<NoPagina />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
