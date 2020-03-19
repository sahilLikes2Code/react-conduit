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
    return this.props.tags ? (
      this.props.tags.tags.map(tag => {
        return (
          <>
            <Link to={`/tags/${tag}`} className="tags">
              {tag}
            </Link>
          </>
        );
      })
    ) : (
      <Spinner />
    );
  }
}

export default Global;
