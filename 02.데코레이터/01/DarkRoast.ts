import { Beverage } from "./Beverage";

export class DarkRoast implements Beverage {
  private description: string;

  constructor() {
    this.description = "Dark Roast";
  }

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 0.99;
  }
}
