import { NavLink } from "react-router-dom";
import LogoNavBar from "../assets/logo_Header.svg";

function NavBar() {
  return (
    <div className="navbar">
      <img src={LogoNavBar} alt="Logo-NavBar" />
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link activeLink" : "nav-link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link activeLink" : "nav-link"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
