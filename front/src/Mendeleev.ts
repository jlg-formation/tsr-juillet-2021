import * as d3 from "d3";

export class Mendeleev {
  constructor() {
    console.log("instantiate Mendeleev");
    this.init();
  }

  async init() {
    const csv = await d3.csv("./atomes.csv");
    console.log("csv: ", csv);

    const data = csv.filter((d) => d.Group && d.Period);

    // plug csv into html
    const div = document.querySelector("div.tableau") as Element;
    console.log("div: ", div);
    div.innerHTML = "";
    const selection = d3.select(div).selectAll("div").data(data);
    selection
      .enter()
      .append("div")
      .style("transform", (d) => {
        const x = (d as any).Group * 2;
        const y = (d as any).Period * 3;
        return `translate(${x}em, ${y}em)`;
      })
      .text((d) => (d as any).Symbol);
  }
}
