import { isAnagram } from "./validAnagram";

test('case 1', () => {
  expect(isAnagram("bob", "bob")).toBe(true);
});

test('case 2', () => {
  expect(isAnagram("caca", "bear")).toBe(false);
});

test('case 2', () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});


test('case 2', () => {
  expect(isAnagram("rat", "car")).toBe(false);
});
