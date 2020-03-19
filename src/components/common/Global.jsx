import React from "react";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart } from "react-icons/fa";

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.articles ? (
      this.props.articles.articles.map(article => {
        return (
          <>
            <div className="article-preview-card">
              <div className="flex-container justify-left p-relative">
                <img src={article.author.image} className="mr-10" alt="" />
                <div className="mb-10">
                  <p>{article.author.username}</p>
                  <p>{article.createdAt}</p>
                  <button id="fav-counter">
                    <FaHeart id="heart" />
                    {article.favoritesCount}
                  </button>
                </div>
              </div>
              <h1>{article.title}</h1>
              <p id="article-desc">{article.description}</p>
              <Link className="txt-dec-none " to={`/article/${article.slug}`}>
                <h3 id="read-more">Read More...</h3>
              </Link>
            </div>
          </>
        );
      })
    ) : (
      <Spinner />
    );
  }
}

export default Global;
