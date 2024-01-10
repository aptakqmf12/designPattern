import { Beverage } from "./Beverage";

export class DarkRoastWithMocha implements Beverage {
  private description: string;

  constructor() {
    this.description = "Dark Roast with Mocha";
  }

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 0.99 + 0.15;
  }
}
