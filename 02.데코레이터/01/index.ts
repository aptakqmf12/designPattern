import { DarkRoastWithMocha } from "./DarkRoastWithMocha";

const beverage = new DarkRoastWithMocha();

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
