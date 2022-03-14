import React, { useState } from "react";
import { app } from "../../utils/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("takioto.shotaro@gmail.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
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
      SIGN UP
      <br />
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
      <button onClick={signUp}>Sign up</button>
      <br />
      <br />
      <Link to="/signin">Sign in</Link>
    </div>
  );
};
