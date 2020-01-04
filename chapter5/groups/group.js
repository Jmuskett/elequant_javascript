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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

export class GroupIterator extends Group {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= group.members.length) {
      {
        done: true;
      }
    } else {
      return (
        { value: this.group.members[this.position], done: false },
        this.position++
      );
    }
  }
}
