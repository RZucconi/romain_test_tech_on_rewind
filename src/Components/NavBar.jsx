import { Link } from "react-router-dom";

import Logo from "../Images/logo_test_tech.PNG";

import "../Styles/NavBar.css";

const links = [
  { path: "/funzone", name: "Funzone" },
  { path: "/testimoniales", name: "Testimoniales" },
];

export default function NavBar() {
  return (
    <div className="headerNav">
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
    </div>
  );
}
