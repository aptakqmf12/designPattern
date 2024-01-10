export interface QuackBehavior {
  quack(): void;
}

export class QuackQuack implements QuackBehavior {
  quack(): void {
    console.log("꽥꽥 꽦 꽤꽥!");
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log("삑-삑");
  }
}
