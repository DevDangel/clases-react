import { Outlet, Link } from "react-router-dom";
import '../assets/styles/navbar.css';
import buk from '../assets/imgs/buk_.png';
const Layout = () => {

  return (

    <>
        <nav>
          <ul>
            <li>
              <img src={buk} alt="" id="img" />
            </li>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/Quienes">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
    </>
  )

};

export default Layout;