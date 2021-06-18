import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Redirect } from "react-router-dom";

import SearchingBox from "../components/SearchBox";
import AddBox from "../components/AddBox";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Redirect exact path="/home" to="/home/search"></Redirect>
        <Route path="/home/add">
          <AddBox />
        </Route>
        <Route path="/home/search">
          <SearchingBox />
        </Route>
        {/* <ProjectList projects={projects} /> */}
      </div>
    );
  }
}
export default Home;
