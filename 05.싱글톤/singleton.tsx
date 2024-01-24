let instance: any;
let globalState = { name: "김태완" };

export class Singleton {
  //   private static instance: any;

  constructor() {
    if (instance) {
      return instance;
    } else {
      instance = this;
    }

    // return instance // 이렇게하면 싱글톤 X
  }

  getName() {
    return globalState.name;
  }

  setName(newName: string) {
    globalState.name = newName;
  }
}
