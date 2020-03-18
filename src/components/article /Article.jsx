import React from "react";

import Header from "../common/Header";
import Spinner from "../spinner/Spinner";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      articleInfo: null
    };
  }

  componentDidMount() {
    let { slug } = this.props.match.params || "";
    fetch(`https://conduit.productionready.io/api/articles/${slug}`)
      .then(res => res.json())
      .then(({ article }) => {
        console.log(article);
        this.setState({ articleInfo: article });
      });
  }

  render() {
    return this.state.articleInfo ? (
      <>
        <div className="width-1100">
          <Header />
        </div>
        <h1>{this.state.articleInfo && this.state.articleInfo.title}</h1>
        <p>
          <b>{this.state.articleInfo && this.state.articleInfo.body}</b>
        </p>
        <h6>{this.state.articleInfo && this.state.articleInfo.createdAt}</h6>
      </>
    ) : (
      <div>
        <div className="width-1100">
          <Header />
        </div>
        <Spinner />
      </div>
    );
  }
}

export default Article;
