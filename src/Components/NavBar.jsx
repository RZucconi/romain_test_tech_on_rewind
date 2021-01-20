import { Link } from "react-router-dom";

import Logo from "../Images/logo_test_tech.PNG";

import "../Styles/NavBar.css";

const links = [
  { path: "/funzone", name: "Funzone" },
  { path: "/testimoniales", name: "Testimoniales" },
];

export default function NavBar() {
  return (
    <header className="headerNav">
      <Link to="/">
        <img src={Logo} alt="webapp logo" width="100px" />
      </Link>
      <nav className="navMenu">
        {links.map((link) => (
          <Link to={link.path}>{link.name}</Link>
        ))}
      </nav>
    </header>
  );
}
