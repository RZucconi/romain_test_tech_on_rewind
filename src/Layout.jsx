import { Route, useLocation } from "react-router-dom";
import "./App.css";
import Funzone from "./Components/Funzone";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Testimoniales from "./Components/Testimoniales";

const routes = [
  { path: "/", Component: Home },
  { path: "/funzone", Component: Funzone },
  { path: "/testimoniales", Component: Testimoniales },
];

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <main>
        {routes.map(({ path, Component }) => (
          <Route exact path={path} location={location}>
            <Component />
          </Route>
        ))}
      </main>
    </>
  );
}
