import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
        <Redirect exact path="/home" to="/home/search"></Redirect>
        <Route path="/home/add">
          <AddBox />
        </Route>
        <Route path="/home/search">
          <SearchBox />
        </Route>
        <ProjectList projects={projects} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.internships,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "internships", orderBy: ["createdAt", "desc"] },
  ])
)(Home);
