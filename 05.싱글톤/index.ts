import { Singleton } from "./singleton";

const instance01 = new Singleton();
const instance02 = new Singleton();

instance01.setName("ldk");

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());

instance02.setName("jjh");

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());

console.log("두 인스턴스는 같은가", instance01 === instance02);
