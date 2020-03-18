import React from "react";

import Spinner from "../spinner/Spinner.jsx";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tags: null
    };
  }

  componentDidMount() {
    let tags = "https:/conduit.productionready.io/api/tags";
    let articles =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";

    let articlePromise = fetch(articles).then(res => res.json());
    let tagPromise = fetch(tags).then(res => res.json());
    Promise.all([articlePromise, tagPromise]).then(res => {
      this.setState({ articles: res[0].articles, tags: res[1].tags });
    });
    // fetch(articles)
    //   .then(res => res.json())
    //   .then(({ articles }) => {
    //     this.setState({ articles: articles });
    //   });

    // fetch(tags)
    //   .then(res => res.json())
    //   .then(({ tags }) => {
    //     this.setState({ tags });
    //   });
  }

  render() {
    return this.state.articles ? (
      <div className="main">
        <div>
          <h1>Article title</h1>
          <ul>
            {this.state.articles &&
              this.state.articles.map(article => {
                return (
                  <li>
                    <Link to={`/article/${article.slug}`}>
                      <h3>{article.title}</h3>
                    </Link>
                    {/* <p>{article.body}</p> */}
                  </li>
                );
              })}
          </ul>
        </div>

        <div>
          <h1>Tags</h1>
          <ul>
            {this.state.tags &&
              this.state.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="height-50px"></div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default Main;
