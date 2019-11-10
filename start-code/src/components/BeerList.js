import React, { Component } from "react";
import BeerItem from "./BeerItem";

class BeerList extends Component {
  render() {
    return (
      <div className="ui divided unstackable items">
        {this.props.array.map((item, i) => (
          <BeerItem item={item} key={i}></BeerItem>
        ))}
      </div>
    );
  }
}
export default BeerList;
