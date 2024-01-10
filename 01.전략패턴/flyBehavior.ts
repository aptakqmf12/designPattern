export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("하늘을 날자");
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("나는 못날아요 ㅠㅠ");
  }
}
