import { Link } from "react-router-dom";

import Logo from "../Images/logo_test_tech.PNG";
import { links } from "../Components/Routes";

import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <header className="headerNav">
      <Link to="/">
        <img className="logo" src={Logo} alt="webapp logo" width="100px" />
      </Link>
      <nav className="navMenu">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
