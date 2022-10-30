import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Home Page System</h1>
      <Link to="/register">Login/Register</Link>
    </div>
  );
};

export default Landing;
