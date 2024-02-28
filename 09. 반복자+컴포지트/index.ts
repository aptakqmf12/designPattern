import { IIterator, NumberIterator, StringIterator } from "./iterator";
import { People, Team, Department } from "./composite";

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
// const employee1 = new People("김태완");
// const employee2 = new People("이도경");

// const team1 = new Team("프론트엔드팀");
// team1.add(employee1);
// team1.add(employee2);

// const employee3 = new People("김송하");

// const team2 = new Team("슈퍼루키 독고다이");
// team2.add(employee3);

// const employee4 = new People("장재형");

// const team3 = new Team("IOS팀");
// team3.add(employee4);

// const department = new Department("프로그래머스 개발자 스터디 부서");
// department.add(team1);
// department.add(team2);
// department.add(team3);

// // 전체 조직도 출력
// department.display(0);
