import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return this.beverage.getDescription() + ", Milk";
  }

  public cost() {
    return 0.1 + this.beverage.cost();
  }
}
