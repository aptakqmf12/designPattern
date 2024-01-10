import { HouseBlend } from "./HouseBlend";

const beverage = new HouseBlend();

beverage.setMilk(true);

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
