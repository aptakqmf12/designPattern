import { Singleton } from "./singleton";

const instance01 = new Singleton();
const instance02 = new Singleton();

console.log("두 인스턴스는 같은가", instance01 === instance02);

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());

instance01.setName("이도경");

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());

instance02.setName("장재형");

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());

instance01.setName("김송하");
instance02.setName("김송하");

console.log("instance01 name", instance01.getName());
console.log("instance02 name", instance02.getName());
