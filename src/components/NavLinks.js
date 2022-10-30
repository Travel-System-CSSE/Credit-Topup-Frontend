import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <article className="links">
      <div className="single-link">
        <Link className="header-link">Home</Link>
      </div>
      <div className="single-link">
        <Link className="header-link">Card</Link>
      </div>
      <div className="single-link">
        <Link className="header-link">Maps</Link>
      </div>
      <div className="single-link">
        <Link className="header-link">Time Table</Link>
      </div>
      <div className="single-link">
        <Link className="header-link">Help & Contact</Link>
      </div>
    </article>
  );
};

export default NavLinks;
