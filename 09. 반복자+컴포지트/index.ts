import { IIterator, NumberIterator, StringIterator } from "./iterator";
import { Employee, Team, Department } from "./composite";

// 반복자 패턴
const numbers: number[] = [1, 2, 3, 4, 5];
const numIterator: IIterator<number> = new NumberIterator(numbers);

while (numIterator.hasNext()) {
  console.log(numIterator.next());
}

const strings: string[] = ["가렌", "야스오", "세나", "요네"];
const strIterator: IIterator<string> = new StringIterator(strings);

while (strIterator.hasNext()) {
  console.log(strIterator.next());
}

// 컴포지트 패턴
const employee1 = new Employee("John Doe");
const employee2 = new Employee("Jane Smith");

const team1 = new Team("Development Team");
team1.add(employee1);
team1.add(employee2);

const employee3 = new Employee("Alice Johnson");
const employee4 = new Employee("Bob Brown");

const team2 = new Team("Marketing Team");
team2.add(employee3);
team2.add(employee4);

const department = new Department("Engineering Department");
department.add(team1);
department.add(team2);

// 전체 조직도 출력
department.display(0);
