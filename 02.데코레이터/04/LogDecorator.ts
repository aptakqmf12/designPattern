import { Beverage } from "./Beverage";

export class LogDecorator implements Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription();
  }

  public cost(): number {
    console.log("LogDecorator::cost");
    return this.beverage.cost();
  }
}
