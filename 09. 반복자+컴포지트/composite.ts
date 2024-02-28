interface Component {
  display(indentation: number): void;
}

// 개인
export class People implements Component {
  constructor(private name: string) {}

  display(indentation: number): void {
    console.log(`${" ".repeat(indentation)}- ${this.name}`);
  }
}

// 팀
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

// 부서
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
