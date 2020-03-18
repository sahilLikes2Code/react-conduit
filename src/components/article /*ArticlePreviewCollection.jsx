import React from "react";

import ArticlePreview from "./ArticlePreview.jsx";
import Spinner from "../spinner/Spinner";

class ArticlePreviewCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      articleInfo: null
    };
  }

  // const ArticlesArray = articleInfo.map(article => (
  //   <ArticlePreview title={this.state.title} />
  // ));

  componentDidMount() {
    fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
      .then(res => res.json())
      .then(({ article }) => {
        console.log(article);
        this.setState({ articleInfo: article });
      });
  }

  render() {
    return this.state.articleInfo ? (
      <></>
    ) : (
      <div>
        <Spinner />
      </div>
    );
  }
}

export default ArticlePreviewCollection;
