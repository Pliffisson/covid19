import React, { Component } from "react";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountyPicker from "./components/CountryPicker/CountyPicker";

import { Cards, Chart, CountyPicker } from "./components";

export default class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Chart />
        <CountyPicker />
      </div>
    );
  }
}
