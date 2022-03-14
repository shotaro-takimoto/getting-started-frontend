import React, { useState } from "react";
import { app } from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("takioto.shotaro@gmail.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      mail:
      <input
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      password:
      <input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signIn}>Sign in</button>
      <br />
      <br />
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
