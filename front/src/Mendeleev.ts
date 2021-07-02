import * as d3 from "d3";

export class Mendeleev {
  constructor() {
    console.log("instantiate Mendeleev");
    this.init();
  }

  async init() {
    const csv = await d3.csv("./atomes.csv");
    console.log("csv: ", csv);

    // plug csv into html
    const div = document.querySelector("div.tableau");
    console.log("div: ", div);
  }
}
