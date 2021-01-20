import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );
}
