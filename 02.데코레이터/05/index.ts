import { HouseBlend } from "./HouseBlend";

const beverage = new HouseBlend();

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
