import React from "react";
import { Route } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";
import Main from "./Main";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      article: null,
      tag: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(response => response.json())
      .then(data => this.setState({ article: data }));
  }

  render() {
    return (
      <>
        <div className="width-1100">
          <Header />
        </div>
        <div className="banner">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
        {/*test*/}
        <Main />
        {/*  */}
        <Footer />
      </>
    );
  }
}

export default HomePage;
