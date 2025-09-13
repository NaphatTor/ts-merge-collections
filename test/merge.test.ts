import { describe, it, expect } from "vitest";
import { merge } from "../src/merge.js";

describe("merge three collections with c2 descending", () => {
  it("basic", () => {
    expect(merge([1,4,7], [9,5,3,2], [0,6,8]))
      .toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it("handles empties", () => {
    expect(merge([], [5,4,1], [])).toEqual([1,4,5]);
    expect(merge([1,2], [], [0])).toEqual([0,1,2]);
    expect(merge([], [], [])).toEqual([]);
  });

  it("negatives and duplicates", () => {
    expect(merge([-5,-1,0,0,2], [3,2,2,-1], [-2,2]))
      .toEqual([-5, -2, -1, -1, 0, 0, 2, 2, 2, 2, 3]);
  });

  it("already sorted boundaries", () => {
    expect(merge([1,2,3], [3,2,1], [1,2,3]))
      .toEqual([1,1,1,2,2,2,3,3,3]);
  });
});
