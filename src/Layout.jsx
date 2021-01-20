import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </>
  );
}
