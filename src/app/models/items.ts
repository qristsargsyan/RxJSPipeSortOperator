export class Item {
    public name: string;
    constructor(public value: number) {
      this.name = `id ${value}`;
    }
  }