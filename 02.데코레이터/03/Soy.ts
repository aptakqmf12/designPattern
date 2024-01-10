import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return this.beverage.getDescription() + ", Soy";
  }

  public cost() {
    return 0.15 + this.beverage.cost();
  }
}
