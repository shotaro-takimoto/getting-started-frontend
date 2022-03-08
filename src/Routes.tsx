import React, { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactRouterDomRoutes,
} from "react-router-dom";
import { Signin } from "./components/pages/Signin";
import { Home } from "./components/pages/Home";
import { Signup } from "./components/pages/Signup";
import { FirebaseAuthContext } from "./contexts/FirebaseAuthContext";

export const Routes = () => {
  const { user, isInitialized } = useContext(FirebaseAuthContext);

  if (!isInitialized) {
    return null;
  }

  return (
    <BrowserRouter>
      <ReactRouterDomRoutes>
        {user && (
          <>
            <Route path="*" element={<Home />} />
          </>
        )}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={user ? <Home /> : <Signin />} />
      </ReactRouterDomRoutes>
    </BrowserRouter>
  );
};
