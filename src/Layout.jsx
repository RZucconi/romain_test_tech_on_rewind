import { Route } from "react-router-dom";
import "./App.css";
import Funzone from "./Components/Funzone";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Testimoniales from "./Components/Testimoniales";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/funzone" component={Funzone} />
        <Route exact path="/testimoniales" component={Testimoniales} />
      </main>
    </>
  );
}
