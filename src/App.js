import Button from 'react-bootstrap/Button'
import firebase from "firebase";
import "firebase/auth"

export default function App() {
    return (
        <div id="contain">
            <section id="whenSignedOut">
                <Button id="signInBtn" variant="outline-primary">Sign In with Google</Button>
            </section>

            <section id="whenSignedIn" hidden="true">
                <div id="userDetails"></div>
                <Button id="signOutBtn" variant="outline-danger">Sign Out</Button>
            </section>
        </div>
    );
}

let isFirebaseAppDefined = false;
setInterval(() => {
    if (! isFirebaseAppDefined) {
        if (firebase.app()) {
            const auth = firebase.auth();
            const whenSignedIn = document.getElementById('whenSignedIn');
            const whenSignedOut = document.getElementById('whenSignedOut');

            const signInBtn = document.getElementById('signInBtn');
            const signOutBtn = document.getElementById('signOutBtn');

            const userDetails = document.getElementById('userDetails');

            const provider = new firebase.auth.GoogleAuthProvider();

            signInBtn.onclick = () => auth.signInWithPopup(provider);
            signOutBtn.onclick = () => auth.signOut();

            auth.onAuthStateChanged(user => {
                if (user) { // signed in
                    whenSignedIn.hidden = false;
                    whenSignedOut.hidden = true;
                    userDetails.innerHTML = `<h3>Hello <code><i>${user.displayName}</i></code>!</h3> User ID: <code>${user.uid}</code>`;
                } else {
                    whenSignedIn.hidden = true;
                    whenSignedOut.hidden = false;
                    userDetails.innerHTML = '';
                }
            });
            isFirebaseAppDefined = true;
        }
    }
}, 100);

console.log(firebase)
