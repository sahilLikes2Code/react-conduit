import React from "react";

import Header from "../common/Header";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    fetch(`https://conduit.productionready.io/api/articles/${slug}`)
      .then(res => res.json())
      .then(({ article }) => {
        this.setState({ article: article });
      });
  }

  render() {
    console.log(this.state.article);
    return this.state.article ? (
      <div>
        <h1>{this.state.article.title}</h1>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default Article;

//
