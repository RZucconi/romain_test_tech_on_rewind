import ThumbnailsDisplay from "../Pages/ThumbnailsDiplay";
import SingleVideoDisplay from "../Pages/SingleVideoDisplay";

export const links = [
  { path: "/funzone", name: "Funzone" },
  { path: "/testimoniales", name: "Testimoniales" },
];

export const routes = [
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
    name: "Testimoniales",
  },
  {
    path: "/video-details/:id",
    Component: SingleVideoDisplay,
    name: "single",
  },
];
