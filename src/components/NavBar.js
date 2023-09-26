import { NavLink } from "react-router-dom";
import LogoNavBar from "./LogoNavBar";

function NavBar() {
  return (
    <div className="navbar">
      <LogoNavBar />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
