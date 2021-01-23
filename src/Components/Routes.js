import ThumbnailsDisplay from "../Pages/ThumbnailsDiplay";
import SingleVideoDisplay from "../Pages/SingleVideoDisplay";

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
    name: "ThumbnailsDisplay",
  },
  {
    path: "/video-details/:id",
    Component: SingleVideoDisplay,
  },
];
