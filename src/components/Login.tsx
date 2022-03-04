import React, { useState } from "react";
import { actionCodeSettings, app } from "../utils/firebaseAuth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendSignInLinkToEmail,
} from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("takioto.shotaro@gmail.com");
  const [password, setPassword] = useState("");
  const signUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
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
      <button onClick={signUp}>sign up</button>
    </div>
  );
};
