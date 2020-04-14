import React from "react";
import { Route } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ArticlePreview from "../article /*ArticlePreviewCollection";
import Main from "./Main";
import Global from "../common/Global";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";
import {
  fetchArticlesFunc,
  fetchArticlesCDM,
  fetchTagsFunc,
  fetchTagsCDM,
} from "../../store/actions";
import { connect } from "react-redux";
import { fetchTags } from "../../store/types";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tags: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTagsCDM());

    this.props.dispatch(fetchArticlesCDM());
  }

  render() {
    console.log(this.props, "home orops");
    // console.log(this.state.articles);
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
              <Global articles={this.props.articles && this.props.articles} />
            </div>
          </div>
          <div className="tags" className="flex-container">
            <div className="width-30">
              <div className="p-tag-container">
                <p className="popular-tags">Popular Tags</p>
                <Tags tags={this.props.tags && this.props.tags} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
function mapToProps({ articles, tags }) {
  console.log("in map priops", articles, tags);
  return { articles, tags };
}
export default connect(mapToProps)(HomePage);
