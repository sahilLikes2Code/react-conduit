import React from "react";
import { Route } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ArticlePreview from "../article /*ArticlePreviewCollection";
import Main from "./Main";
import Global from "../common/Global";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tag: null
    };
  }

  componentDidMount() {
    console.log("component");
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));
  }

  render() {
    console.log("render");
    return (
      <>
        <div className="width-1100">
          <Header />
        </div>
        <div className="banner">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
        <Global articles={this.state.articles && this.state.articles} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
