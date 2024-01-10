import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend";
  }

  public cost() {
    return 0.89 + super.cost();
  }
}
