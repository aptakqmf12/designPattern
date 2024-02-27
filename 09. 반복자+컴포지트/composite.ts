// 컴포넌트 인터페이스
interface Component {
  display(indentation: number): void;
}

// 개인을 나타내는 클래스
export class Employee implements Component {
  constructor(private name: string) {}

  display(indentation: number): void {
    console.log(`${" ".repeat(indentation)}- ${this.name}`);
  }
}

// 팀을 나타내는 클래스
export class Team implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  display(indentation: number): void {
    console.log(`${" ".repeat(indentation)}* Team: ${this.name}`);
    this.children.forEach((child) => {
      child.display(indentation + 2);
    });
  }
}

// 부서를 나타내는 클래스
export class Department implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  display(indentation: number): void {
    console.log(`${" ".repeat(indentation)}Department: ${this.name}`);
    this.children.forEach((child) => {
      child.display(indentation + 2);
    });
  }
}
