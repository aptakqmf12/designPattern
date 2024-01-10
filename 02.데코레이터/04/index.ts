import { HouseBlend } from "./HouseBlend";
import { LogDecorator } from "./LogDecorator";

const beverage = new LogDecorator(new HouseBlend());

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
