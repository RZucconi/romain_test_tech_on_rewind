import { Route, useLocation } from "react-router-dom";

import NavBar from "../Components/NavBar";
import ThumbnailsDisplay from "../Pages/ThumbnailsDiplay";
import SingleVideoDisplay from "../Pages/SingleVideoDisplay";

import "../Styles/Layout.css";

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
  {
    path: "/video-details/:id",
    Component: SingleVideoDisplay,
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
