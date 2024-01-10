import { Duck } from "./duck";
import { FlyNoWay, FlyWithWings } from "./flyBehavior";
import { QuackQuack, Squeak } from "./quackBehavior";

console.group("# 하늘을 날고 꽥꽥거리는 A오리");
const flyAndQuackDuck = new Duck(new FlyWithWings(), new QuackQuack());

flyAndQuackDuck.display();
flyAndQuackDuck.performFly();
flyAndQuackDuck.performQuack();
console.groupEnd();

console.log("\n");

console.group("# 날개가없고 삑삑 거리는 B오리");
const notFlyAndSquekDuck = new Duck(new FlyNoWay(), new Squeak());
notFlyAndSquekDuck.display();
notFlyAndSquekDuck.performFly();
notFlyAndSquekDuck.performQuack();
console.groupEnd();

console.log("\n");

console.group("# 날개없는 B오리에게 날개를 달아주자");
notFlyAndSquekDuck.setFlyBehavior(new FlyWithWings());

notFlyAndSquekDuck.display();
notFlyAndSquekDuck.performFly();
notFlyAndSquekDuck.performQuack();
console.groupEnd();
