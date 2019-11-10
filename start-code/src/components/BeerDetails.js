import React, { Component } from "react";
import BeerService from "../api/BeerService";
import { Link } from "react-router-dom";

class BeerDetails extends Component {
  api = new BeerService();
  state = {
    data: []
  };
  componentDidMount = async () => {
    console.log(this.props);
    try {
      const beer = await this.api.getBeerById(this.props.match.params.id);
      console.log(beer);
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
            <Link to={`/beers`}>Back</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default BeerDetails;
