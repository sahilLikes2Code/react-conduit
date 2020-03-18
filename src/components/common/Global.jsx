import React from "react";
import Spinner from "../spinner/Spinner";

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.articles ? (
      this.props.articles.articles.map(article => {
        return <h1>{article.title}</h1>;
      })
    ) : (
      <Spinner />
    );
  }
}

export default Global;
