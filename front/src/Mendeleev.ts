import { ChemicalElt } from "./interfaces/ChemicalElt";
import * as d3 from "d3";

export class Mendeleev {
  constructor() {
    console.log("instantiate Mendeleev");
    this.init();
  }

  async init() {
    const csv: ChemicalElt[] = (await d3.csv(
      "./atomes.csv"
    )) as unknown as ChemicalElt[];
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
      .text((d) => d.Symbol)
      .style("transform", (d) => {
        const x = d.Group * (2 + 0.5);
        const y = d.Period * (3 + 0.5);
        return `translate(${x}em, ${y}em)`;
      })
      .on("click", (mouseEvent, d) => {
        console.log("args: ", mouseEvent, d);
      });
  }
}
