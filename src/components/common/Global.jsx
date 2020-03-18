import React from "react";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.articles ? (
      this.props.articles.articles.map(article => {
        return (
          <div className="article-preview-card">
            <img src={article.author.image} alt="" />
            <p>{article.author.username}</p>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <p>{article.favoritesCount}</p>
            <Link>Read More</Link>
          </div>
        );
      })
    ) : (
      <Spinner />
    );
  }
}

export default Global;
