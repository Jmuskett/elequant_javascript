import { Group } from "./group";

test("the has method returns the right result", () => {
  let group = Group.from([10, 20]);

  expect(group.has(10)).toBe(true);
  expect(group.has(30)).toBe(false);
});

test("the add method works", () => {
  let group = Group.from([1, 12]);
  group.add(10);
  expect(group.has(10)).toBe(true);
});

test("the delete method works", () => {
  let group = Group.from([1, 10]);
  group.delete(10);
  expect(group.has(10)).toBe(false);
});
