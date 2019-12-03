import { Vec } from "./vec";

const vecA = new Vec(1, 2);
const vecB = new Vec(2, 3);

test("it should return the correct result from the plus method", () => {
  expect(vecA.plus(vecB)).toEqual({ x: 3, y: 5 });
});

test("it should return the correct result from the minus method", () => {
  expect(vecA.minus(vecB)).toEqual({ x: -1, y: -1 });
});

test("it should return the correct distance from origin", () => {
  expect(new Vec(3, 4).length).toEqual(5);
});
