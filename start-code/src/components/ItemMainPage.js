import React, { Component } from "react";
import imgAllBeer from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

class ItemMainPage extends Component {
  render() {
    return (
      <div className="ui items">
        <div className="item">
          <div className="ui medium image">
            <img src={imgAllBeer} />
          </div>
          <div className="content" style={{ padding: "5% 5%" }}>
            <Link className="header" to={`/beers`}>
              All Beers
            </Link>

            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                repellendus, blanditiis voluptatum accusamus labore facere
                temporibus nostrum? Quod, consectetur numquam nam dignissimos
                voluptate aliquam natus nobis aut omnis earum illo.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ui medium image">
            <img src={imgRandomBeer} />
          </div>
          <div className="content" style={{ padding: "5% 5%" }}>
            <Link className="header" to={`/random-beer`}>
              Random Beers
            </Link>

            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                repellendus, blanditiis voluptatum accusamus labore facere
                temporibus nostrum? Quod, consectetur numquam nam dignissimos
                voluptate aliquam natus nobis aut omnis earum illo.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ui medium image">
            <img src={imgNewBeer} />
          </div>
          <div className="content" style={{ padding: "5% 5%" }}>
            <Link className="header" to={`/new-beer`}>
              New Beer
            </Link>

            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                repellendus, blanditiis voluptatum accusamus labore facere
                temporibus nostrum? Quod, consectetur numquam nam dignissimos
                voluptate aliquam natus nobis aut omnis earum illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemMainPage;
