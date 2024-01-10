import { Beverage } from "./Beverage";

export class HouseBlend implements Beverage {
  private description: string;

  constructor() {
    this.description = "House Blend";
  }

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 0.89;
  }
}
