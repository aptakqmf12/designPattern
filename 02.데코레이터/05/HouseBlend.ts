import { Beverage } from "./Beverage";
import { Log } from "./LogDecorator";

export class HouseBlend implements Beverage {
  private description: string;

  constructor() {
    this.description = "House Blend";
  }

  public getDescription(): string {
    return this.description;
  }

  @Log
  public cost(): number {
    return 0.89;
  }
}
