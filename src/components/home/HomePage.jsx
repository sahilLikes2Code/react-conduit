import React from "react";
import { Route } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ArticlePreview from "../article /*ArticlePreviewCollection";
import Main from "./Main";
import Global from "../common/Global";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tags: null
    };
  }

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(tagData => this.setState({ tags: tagData }));

    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));
  }

  render() {
    console.log(this.state.tags);
    console.log(this.state.articles);
    return (
      <>
        <div className="width-1100">
          <Header />
        </div>
        <div className="banner">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
        <div className="flex-container space-between width-1100">
          <div>
            <div className="width-70">
              <p id="globl-feed">Global Feed</p>
              <Global articles={this.state.articles && this.state.articles} />
            </div>
          </div>
          <div className="tags" className="flex-container">
            <div className="width-30">
              <div className="p-tag-container">
                <p className="popular-tags">Popular Tags</p>
                <Tags tags={this.state.tags && this.state.tags} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HomePage;
