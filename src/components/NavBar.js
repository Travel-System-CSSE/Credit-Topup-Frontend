import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

const NavBar = () => {
  const { user } = useSelector((store) => store.user);
  const [showLogout, setLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navBar">
      <div className="header">
        <img
          src="https://img.icons8.com/cotton/64/000000/school-bus--v2.png"
          className="navbar-icon"
          alt="logo"
        />
      </div>
      <article className="nav-items">
        <h3>transport for anywhere in SL</h3>
        <div className="items">
          <div className="single-item">
            <FiEdit2 className="nav-icons" />
            <p>Review</p>
          </div>
          <div className="single-item">
            <FiBell className="nav-icons" />
            {}
            <p>Alerts</p>
          </div>
          <div className="single-item" onClick={() => setLogout(!showLogout)}>
            <FiUser className="nav-icons extra" />
            <span>
              {user ? (
                user.name.trim()
              ) : (
                <Link to="/register" className="link-res">
                  Sign Up
                </Link>
              )}
            </span>
            {user ? (
              <div
                className={showLogout ? "logout btn log-btn" : "none"}
                onClick={() => {
                  dispatch(logoutUser());
                  setLogout(() => {
                    navigate("/register");
                  }, 2000);
                }}
              >
                Logout
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </nav>
  );
};

export default NavBar;
