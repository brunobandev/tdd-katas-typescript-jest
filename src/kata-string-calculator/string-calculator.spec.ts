// https://osherove.com/tdd-kata-1

import Calculator from "./string-calculator";

describe("Calculate string", () => {
  it("Should return 0 if passed no value", () => {
    const result = new Calculator().Add();
    expect(result).toBe(0);
  });

  it("Should return 0 if passed undefined value", () => {
    const result = new Calculator().Add(undefined);
    expect(result).toBe(0);
  });

  it("Should return 0 if passed a empty string", () => {
    const result = new Calculator().Add("");
    expect(result).toBe(0);
  });

  it("Should return itself if passed just one string number", () => {
    const stringNumber: string = "3";
    const result = new Calculator().Add(stringNumber);
    expect(result).toBe(parseInt(stringNumber));
  });

  it("Should return a sum if passed more than one string number", () => {
    const stringNumber: string = "3,2,10,5";
    const result = new Calculator().Add(stringNumber);
    expect(result).toBe(20);
  });

  it("Should return a sum if passed a delimiter as a breakline", () => {
    const stringNumber: string = "3\n2,10,5";
    const result = new Calculator().Add(stringNumber);
    expect(result).toBe(20);
  });
});
