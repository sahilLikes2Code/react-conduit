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
import Footer from "./common/Footer.jsx";
import Header from "./common/Header.jsx";

function Auth() {
  return (
    <Switch>
      <Route exact path="/login-home" component={LoggedInHomePage} />
      <Route exact path="/new" component={NewPost} />
      <Route exact path="/settings" component={SettingsPage} />
    </Switch>
  );
}

function NoAuth(propsMain) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/signin"
        render={props => (
          <SignInPage
            updateIsLoggedIn={propsMain.updateIsLoggedIn}
            {...props}
          />
        )}
      />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/article/:slug" component={Article} />
      <Route exact path="/tags/:name" component={Tag} />
      <Route exact path="*" render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  updateIsLoggedIn = value => {
    this.setState({ isLoggedIn: value });
  };

  componentDidMount() {
    if (localStorage["conduit-token"]) {
      // if (sessionStorage["conduit-token"]) {
      fetch("https://conduit.productionready.io/api/user", {
        method: "GET",
        headers: {
          authorizationL: `Token ${localStorage["conduit-token"]}`
          // authorizationL: `Token ${sessionStorage["conduit-token"]}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.setState({ isLoggedIn: true });
        })
        .catch(err => {
          this.setState({ isLoggedIn: false });
        });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <Auth />
        ) : (
          <NoAuth updateIsLoggedIn={this.updateIsLoggedIn} />
        )}
      </>
    );
  }
}

export default App;
