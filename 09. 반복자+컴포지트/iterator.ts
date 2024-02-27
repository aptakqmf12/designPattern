export interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

export class NumberIterator implements IIterator<number> {
  private index: number = 0;
  constructor(private numbers: number[]) {}

  hasNext(): boolean {
    return this.index < this.numbers.length; // 같아지면 next가 없음
  }

  next(): number {
    return this.numbers[this.index++];
  }
}

export class StringIterator implements IIterator<string> {
  private index: number = 0;
  constructor(private strings: string[]) {}

  hasNext(): boolean {
    return this.index < this.strings.length; // 같아지면 next가 없음
  }

  next(): string {
    return this.strings[this.index++];
  }
}
