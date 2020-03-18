import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import LoggedInHeader from "../common/LoggedInHeader";

function LoggedInHomePage() {
  return (
    <div className="logged-in-homepage">
      <div className="width-1100">
        <LoggedInHeader />
      </div>
      <div className="width-1100 flex-container loggedin-mid-section">
        <div className="width-75-percent">
          <div className="flex-container">
            <a className="feed-type">Your Feed</a>
            <span className="feed-type">Global Feed</span>
          </div>
          {/* <hr /> */}
          <p id="no-articles">No articles here yet!</p>
        </div>
        <div className="width-25-percent">
          <div className="tags">
            <p>Popular Tags</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoggedInHomePage;
