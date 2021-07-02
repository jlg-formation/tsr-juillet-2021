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
    const div = document.querySelector("div.tableau") as Element;
    console.log("div: ", div);
    div.innerHTML = "";
    const selection = d3.select(div).selectAll("div").data(csv);
    selection
      .enter()
      .append("div")
      .text((d) => (d as any).Symbol);
  }
}
