import React from "react";
import LoggedInHeader from "./common/LoggedInHeader";
import Footer from "./common/Footer";

function NewPost() {
  return (
    <div className="settings-page">
      <div className="width-1100">
        <LoggedInHeader />
      </div>
      <h1>Your Settings</h1>
      <form action="">
        <input type="email" placeholder="URL of profile picture" />
        <input type="text" placeholder="user@email.com" />
        <textarea
          name=""
          id=""
          rows="8"
          placeholder="Short bio about you"
        ></textarea>
        <input type="email" placeholder="user@email.com" />
        <input type="password" placeholder="New password" />
        <button className="signup" type="submit">
          Update Settings
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default NewPost;
