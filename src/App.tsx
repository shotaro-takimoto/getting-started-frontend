import React from "react";
import { Routes } from "./Routes";
import { FirebaseAuthProvider } from "./contexts/FirebaseAuthContext";

export const App = () => {
  return (
    <FirebaseAuthProvider>
      <Routes />
    </FirebaseAuthProvider>
  );
};
