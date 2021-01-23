import { Route, useLocation } from "react-router-dom";
import "./App.css";

import ThumbnailsDisplay from "./Components/ThumbnailsDiplay";
import NavBar from "./Components/NavBar";

import "./Styles/Layout.css";

const routes = [
  {
    path: "/",
    id: "",
    limit: 5,
    tags: "",
    after: "",
    before: "",
    Component: ThumbnailsDisplay,
    name: "All",
  },
  {
    path: "/funzone",
    id: "",
    limit: 5,
    tags: "Funzone",
    after: "",
    before: "",
    Component: ThumbnailsDisplay,
    name: "Funzone",
  },
  {
    path: "/testimoniales",
    id: "",
    limit: 5,
    tags: "Testimoniales",
    after: "",
    before: "",
    Component: ThumbnailsDisplay,
    name: "Testimoniales",
  },
];

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <main className="main">
        {routes.map(
          ({ path, id, limit, tags, before, after, Component, name }) => (
            <Route exact path={path} location={location}>
              <Component
                name={name}
                id={id}
                limit={limit}
                tags={tags}
                before={before}
                after={after}
              />
            </Route>
          )
        )}
      </main>
    </>
  );
}
