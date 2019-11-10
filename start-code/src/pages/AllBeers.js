import React, { Component } from "react";
import BeerList from "../components/BeerList";
import SearchBar from "../components/SearchBar";
import BeerService from "../api/BeerService";
import { Link } from "react-router-dom";

class AllBeers extends Component {
  api = new BeerService();
  state = {
    data: []
  };
  onSearchSubmit = async term => {
    try {
      console.log(term);
      let answer = await this.api.searchByTerm(term);
      console.log(answer);
      this.setState({ data: answer });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    try {
      const allBeers = await this.api.getAllBeers();
      console.log(allBeers);
      this.setState({ data: allBeers });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div style={{ padding: "5% 7%" }}>
        <SearchBar
          onSearch={this.onSearchSubmit}
          placeholder="Search countries"
        ></SearchBar>
        {this.state.data.length > 0 ? (
          <BeerList array={this.state.data}></BeerList>
        ) : (
          <Link to={`/`}>Back</Link>
        )}
      </div>
    );
  }
}
export default AllBeers;
