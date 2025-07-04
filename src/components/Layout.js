import { Outlet, NavLink } from "react-router-dom";
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
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'active' : ''}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/Quienes" className={({ isActive }) => isActive ? 'active' : ''}>Quienes Somos</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
