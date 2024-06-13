import { describe, expect, it } from "vitest";

import { add, div, mul, sub } from "./calc";

describe("add", () => {
  it("1+2は3になるはず", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("2+3は4にならないはず", () => {
    expect(add(2, 3)).not.toBe(4);
  });
});

describe("sub", () => {
  it("3-1は2になるはず", () => {
    expect(sub(3, 1)).toBe(2);
  });
  it("3-2は1にならないはず", () => {
    expect(sub(3, 2)).not.toBe(1);
  });
});

describe("mul", () => {
  it("2*3は6になるはず", () => {
    expect(mul(2, 3)).toBe(6);
  });
  it("2*3は5にならないはず", () => {
    expect(mul(2, 3)).not.toBe(5);
  });
});

describe("div", () => {
  it("6/2は3になるはず", () => {
    expect(div(6, 2)).toBe(3);
  });
  it("6/2は4にならないはず", () => {
    expect(div(6, 2)).not.toBe(4);
  });
});
