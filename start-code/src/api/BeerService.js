import axios from "axios";
class BeerService {
  constructor() {
    //create an instance of axios. axios.create defines the basic setup for our api calls.
    this.service = axios.create({
      baseURL: "https://ih-beers-api.herokuapp.com/", //the url
      withCredentials: true // allows CORS (more on that later)
    });
  }
  createNewBeer = async beer => {};

  getAllBeers = async () => {
    const { data } = await this.service.get("beers");
    return data;
  };

  searchByTerm = async term => {
    if (term === "") {
      return this.getAllBeers();
    }
    console.log("searchByTerm");
    console.log(term);
    const { data } = await this.service.get(`beers/search?q=${term}`);
    console.log("data");
    console.log(data);
    return data;
  };

  getBeerById = async id => {
    const { data } = await this.service.get(`beers/${id}`);
    return data;
  };
  getRandomBeer = async () => {
    const { data } = await this.service.get("beers/random");
    return data;
  };
}

export default BeerService;
