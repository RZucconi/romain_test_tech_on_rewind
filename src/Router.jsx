import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  );
}
