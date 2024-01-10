import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast";
  }

  public cost() {
    return 0.99 + super.cost();
  }
}
