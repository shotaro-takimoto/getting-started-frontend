import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import {getCities} from "../../utils/firebase";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signin");
  };
  return (
    <>
      THIS IS HOME
      <br />
      <button onClick={handleLogout}>Sign out</button><br/>
      <button onClick={getCities}>Get from firestore</button><br/>
    </>
  );
};
