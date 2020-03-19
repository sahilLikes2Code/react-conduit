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
        // console.log(new Date(article.createdAt).toDateString());
        // console.log("test");
        return (
          <>
            <div className="article-preview-card">
              <div className="flex-container justify-left p-relative">
                <img src={article.author.image} className="mr-10" alt="" />
                <div className="mb-10">
                  <p>{article.author.username}</p>
                  <p>{new Date(article.createdAt).toDateString()}</p>
                  <button id="fav-counter">
                    <FaHeart id="heart" />
                    {article.favoritesCount}
                  </button>
                </div>
              </div>
              <Link className="txt-dec-none " to={`/article/${article.slug}`}>
                <h1>{article.title}</h1>
              </Link>
              <Link className="txt-dec-none " to={`/article/${article.slug}`}>
                <p id="article-desc">{article.description}</p>
              </Link>
              <Link className="txt-dec-none " to={`/article/${article.slug}`}>
                <p id="read-more">Read More...</p>
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
