import React, {Component} from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Details extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/sign-in'/>
    return (
      <div>
        <Helmet>
          <title>Details</title>
        </Helmet>
        <h1>Details</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Details);
