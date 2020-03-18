import React from "react";

import LoggedInHeader from "../common/LoggedInHeader";
import Footer from "../common/Footer";

function NewPost() {
  return (
    <div className="new-post">
      <div className="width-1100">
        <LoggedInHeader />
      </div>
      <form action="">
        <input type="text" placeholder="Article Title" />
        <input type="text" placeholder="What's this article about?" />
        <textarea
          name=""
          id=""
          rows="8"
          placeholder="Write your article (in markdown)"
        ></textarea>
        <input type="text" placeholder="Enter tags" />
        <button className="signup" type="submit">
          Publish Article
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default NewPost;
