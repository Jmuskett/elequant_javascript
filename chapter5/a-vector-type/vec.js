export class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    const x = this.x + vec.x;
    const y = this.y + vec.y;

    return { x, y };
  }

  minus(vec) {
    const x = this.x - vec.x;
    const y = this.y - vec.y;

    return { x, y };
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
