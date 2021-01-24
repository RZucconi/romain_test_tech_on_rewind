import { Route, useLocation } from "react-router-dom";

import { routes } from "./Components/Routes";

import NavBar from "./Components/NavBar";

import "./Styles/Layout.css";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        {routes.map(({ path, id, limit, tags, Component, name }) => (
          <Route exact path={path} location={location}>
            <Component id={id} limit={limit} tags={tags} name={name} />
          </Route>
        ))}
      </main>
    </>
  );
}
