import { Route, useLocation } from "react-router-dom";
import "./App.css";

import ThumbnailsDisplay from "./Components/ThumbnailsDiplay";
import NavBar from "./Components/NavBar";

import "./Styles/Layout.css";

const routes = [
  { path: "/", limit: 5, tags: "", Component: ThumbnailsDisplay },
  { path: "/funzone", limit: 5, tags: "Funzone", Component: ThumbnailsDisplay },
  {
    path: "/testimoniales",
    limit: 5,
    tags: "Testimoniales",
    Component: ThumbnailsDisplay,
  },
];

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <main className="main">
        {routes.map(({ path, limit, tags, Component }) => (
          <Route exact path={path} location={location}>
            <Component limit={limit} tags={tags} />
          </Route>
        ))}
      </main>
    </>
  );
}
