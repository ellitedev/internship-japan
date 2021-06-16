import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig),
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);