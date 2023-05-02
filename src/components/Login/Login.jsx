import React, { useState } from "react";
import app from "../../firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* conditional rendering of buttons */}
      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>log in</button>
      )}

      {/* conditional rendering */}
      {user && (
        <div>
          <h3> User : {user.displayName}</h3>
          <h4>Email : {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
