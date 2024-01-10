import { Beverage } from "./Beverage";

export abstract class CondimentDecorator implements Beverage {
  protected beverage: Beverage;
  protected condiment: string;
  public condiments: string[];

  constructor(beverage: Beverage, condiment: string) {
    this.beverage = beverage;
    this.condiment = condiment;
    this.condiments.push(this.condiment);
  }

  public abstract getDescription(): string;
  public abstract cost(): number;
}
