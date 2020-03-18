import React from "react";

import Header from "../common/Header";
import Spinner from "../spinner/Spinner";

class Tag extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    let { tag } = this.props.match.params.name || "";
    fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`)
      .then(res => res.json())
      .then(({ articles }) => {
        console.log(articles);
        // console.log(article);
        this.setState({ articles: articles });
      });
  }

  render() {
    return this.state.articles ? (
      <div>
        {this.state.articles &&
          this.state.articles.map(article => {
            return <h1>Tag: {article.title}</h1>;
          })}
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default Tag;
