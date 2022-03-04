import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactRouterDomRoutes,
} from "react-router-dom";
import { Login } from "./components/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterDomRoutes>
        <Route path="/login" element={<Login />} />
      </ReactRouterDomRoutes>
    </BrowserRouter>
  );
};
