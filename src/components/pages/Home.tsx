import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebaseAuth";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signin");
  };
  return (
    <div>
      THIS IS HOME
      <br />
      <br />
      <a onClick={handleLogout}>Sign out</a>
    </div>
  );
};
