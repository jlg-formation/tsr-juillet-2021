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
      .on("click", (mouseEvent, d) => {
        console.log("args: ", mouseEvent, d);
        this.updateDetail(d);
      })
      .transition()
      .delay((d) => d.AtomicNumber * 10)
      .styleTween("transform", (d) => {
        const x = d.Group * (2 + 0.5);
        const y = d.Period * (3 + 0.5);

        const startTranslateState = "translate(0,0)";
        const endTranslateState = `translate(${x}em, ${y}em)`;
        return d3.interpolateString(startTranslateState, endTranslateState);
      });
  }

  updateDetail(d: ChemicalElt): void {
    // 1) recuperer le div.detail de l'html
    // 2) placer les info dans les span.<class>

    const divDetail = document.querySelector("div.detail") as Element;
    console.log("divDetail: ", divDetail);
    (divDetail.querySelector(".symbol") as Element).innerHTML = d.Symbol;
    (divDetail.querySelector(".name") as Element).innerHTML = d.Element;
    (divDetail.querySelector(".atomicNbr") as Element).innerHTML =
      d.AtomicNumber + "";
    (divDetail.querySelector(".atomicMass") as Element).innerHTML =
      d.AtomicMass + "";
  }
}
