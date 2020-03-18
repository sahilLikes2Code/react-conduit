import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" header flex-container space-between align-y">
        <Link to="/" className="txt-dec-none">
          <h3>conduit</h3>
        </Link>
        <ul className="flex-container">
          <li className="txt-dec-none">
            {/* <NavLink
              activeClassName="btn-color-change"
              to="/"
              className="txt-dec-none"
            > */}
            <Link to="/" className="txt-dec-none">
              Home
            </Link>
          </li>
          <li>
            <NavLink
              activeClassName="btn-color-change"
              to="/signin"
              className="txt-dec-none"
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="btn-color-change"
              to="/signup"
              className="txt-dec-none"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
