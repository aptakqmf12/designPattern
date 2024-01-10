import { HouseBlend } from "./HouseBlend";
import { Milk } from "./Milk";
import { Soy } from "./Soy";

const beverage = new Milk(new Soy(new HouseBlend()));

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
