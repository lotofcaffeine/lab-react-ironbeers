import React, { Component } from "react";
import BeerService from "../api/BeerService";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  api = new BeerService();
  state = {
    data: []
  };
  componentDidMount = async () => {
    console.log(this.props);
    try {
      const beer = await this.api.getRandomBeer();
      this.setState({ data: beer });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { name, image_url, _id, tagline } = this.state.data;
    return (
      <div className="item" style={{ padding: "4% 4%" }}>
        <img src={image_url} className="ui tiny middle aligned image" />
        <div className="middle aligned content">
          <p className="header"> {name}</p>
          <div className="meta"></div>
          <div className="description">
            <p>{tagline}</p>
            <Link to={`/`}>Back</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomBeer;
