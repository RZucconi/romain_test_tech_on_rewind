import { Route, useLocation } from "react-router-dom";
import "./App.css";

import ThumbnailsDisplay from "./Components/ThumbnailsDiplay";
import NavBar from "./Components/NavBar";

import "./Styles/Layout.css";

const routes = [
  {
    path: "/",
    limit: 5,
    tags: "",
    Component: ThumbnailsDisplay,
    name: "All",
  },
  {
    path: "/funzone",
    limit: 5,
    tags: "Funzone",
    Component: ThumbnailsDisplay,
    name: "Funzone",
  },
  {
    path: "/testimoniales",
    limit: 5,
    tags: "Testimoniales",
    Component: ThumbnailsDisplay,
    name: "ThumbnailsDisplay",
  },
];

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <NavBar />
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
