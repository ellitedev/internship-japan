import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const UserDetails = (props) => {
  const {user} = props;
  console.log("me",props);
  if (user) {
    return (
      <div>
        <Card>
          <Card.Header>
            {user.firstName} {user.lastName}
          </Card.Header>
          <Card.Body>
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/"+user.youtubeLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const auth = state.firebase.auth;
  const users = state.firestore.data.users;
  const user = users ? users[auth.uid] : null;
  return {
    auth: state.firebase.auth,
    user: user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(UserDetails);
