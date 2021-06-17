import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SearchBox from "../components/SearchBox";
import AddBox from "../components/AddBox";
import ProjectList from "../components/ProjectList";

class Home extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ProjectList projects={projects} />
        <Redirect exact path="/home" to="/home/search"></Redirect>
        <Route path="/home/add">
          <AddBox />
        </Route>
        <Route path="/home/search">
          <SearchBox />
        </Route>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};
export default connect(mapStateToProps)(Home);
