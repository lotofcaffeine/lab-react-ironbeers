import React, { Component } from "react";
import { Link } from "react-router-dom";
class BeerItem extends Component {
  render() {
    const { name, image_url, _id, tagline } = this.props.item;
    return (
      <div className="item">
        <img src={image_url} className="ui tiny middle aligned image" />
        <div className="middle aligned content">
          <Link className="header" to={`/beers/${_id}`}>
            {name}
          </Link>

          <div className="meta"></div>
          <div className="description">
            <p>{tagline}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default BeerItem;
