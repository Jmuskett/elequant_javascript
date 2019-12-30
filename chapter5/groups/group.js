export class Group {
  constructor(arr) {
    this.group = [...arr];
  }

  static from(arr) {
    return new Group(arr);
  }

  add(n) {
    if (this.group.includes(n)) {
      return;
    } else {
      this.group.push(n);
    }
  }

  delete(n) {
    this.group = this.group.filter(number => number !== n);
  }

  has(n) {
    return this.group.includes(n);
  }
}
