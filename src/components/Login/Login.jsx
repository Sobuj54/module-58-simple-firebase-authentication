import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  return (
    <div>
      <button>log in</button>
    </div>
  );
};

export default Login;
