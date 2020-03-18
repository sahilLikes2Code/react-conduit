import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage.jsx";
import SignInPage from "./signup/SignInPage.jsx";
import SignUpPage from "./signup/SignUpPage.jsx";
import LoggedInHomePage from "./home/LoggedInHomePage.jsx";
import NewPost from "./article /NewPost.jsx";
import SettingsPage from "./SettingsPage.jsx";
import Article from "./article /Article";
import Tag from "./article /Tag.jsx";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/new" component={NewPost} />
      <Route exact path="/login-home" component={LoggedInHomePage} />
      <Route exact path="/settings" component={SettingsPage} />
      <Route exact path="/article/:slug" component={Article} />
      <Route exact path="/tags/:name" component={Tag} />
    </>
  );
}

export default App;
