import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./index.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import UserDetails from "./pages/Details";
import ProjectDetails from "./pages/ProjectDetails";

//Components
import Navbar1 from "./components/Navbar1";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar1 />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Redirect exact path="/" to="/home"></Redirect>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/userdetails/:id">
            <UserDetails />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/project/:id" component={ProjectDetails} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
