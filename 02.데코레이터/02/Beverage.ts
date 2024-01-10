export abstract class Beverage {
  protected description: string;
  private milk: boolean;
  private soy: boolean;
  private mocha: boolean;
  private whip: boolean;

  constructor() {
    this.description = "Beverage";
    this.milk = false;
    this.soy = false;
    this.mocha = false;
    this.whip = false;
  }

  public getDescription(): string {
    return this.description;
  }

  public cost() {
    let total = 0;

    if (this.hasMilk()) {
      total += 0.1;
    }

    if (this.hasSoy()) {
      total += 0.15;
    }

    if (this.hasMocha()) {
      total += 0.2;
    }

    if (this.hasWhip()) {
      total += 0.1;
    }

    return total;
  }

  public hasMilk(): boolean {
    return this.milk;
  }

  public hasSoy(): boolean {
    return this.soy;
  }

  public hasMocha(): boolean {
    return this.mocha;
  }

  public hasWhip(): boolean {
    return this.whip;
  }

  public setMilk(milk: boolean): void {
    this.milk = milk;
  }

  public setSoy(soy: boolean): void {
    this.soy = soy;
  }

  public setMocha(mocha: boolean): void {
    this.mocha = mocha;
  }

  public setWhip(whip: boolean): void {
    this.whip = whip;
  }
}
