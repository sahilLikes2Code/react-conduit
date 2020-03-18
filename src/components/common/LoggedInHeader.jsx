import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LoggedInHeader() {
  return (
    <>
      <div className="header flex-container space-between align-y">
        <Link to="/login-home" className="txt-dec-none">
          <h3>conduit</h3>
        </Link>
        <ul className="flex-container">
          <li>
            <Link to="/login-home" className="txt-dec-none">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/new" className="txt-dec-none">
              <FontAwesomeIcon icon={faEdit} style={{ marginRight: "3px" }} />
              <a>New Post</a>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="txt-dec-none">
              <FontAwesomeIcon icon={faCog} style={{ marginRight: "3px" }} />
              <a>Settings</a>
            </Link>
          </li>
          <li>
            <a>user@email.com</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LoggedInHeader;
