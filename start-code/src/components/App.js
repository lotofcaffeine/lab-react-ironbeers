import React, { Component } from "react";
import MainPage from "../pages/MainPage";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import AllBeers from "../pages/AllBeers";
import BeerItem from "./BeerItem";
import BeerDetails from "./BeerDetails";
import RandomBeer from "./RandomBeer";

const NewBeer = () => <h1>NewBeer</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route exact path="/beers" render={() => <AllBeers />} />
          <Route
            exact
            path="/beers/:id"
            render={routeProps => <BeerDetails {...routeProps} />}
          />
          <Route path="/random-beer" render={() => <RandomBeer />} />
          <Route path="/new-beer" render={() => <NewBeer />} />

          {/* <Route path="/dogs" render={() => <Dogs list={this.state.data} />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
