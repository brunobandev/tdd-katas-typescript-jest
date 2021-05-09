// Kata URL: https://osherove.com/tdd-kata-1
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

  // Part #4 of kata.
  it("Should determine the delimiter as the char after // and return the sum of the numbers", () => {
    const stringNumber: string = "3//;\n1;2";
    const result = new Calculator().Add(stringNumber);
    expect(result).toBe(6);
  });

  // Part #5 of kata.
  it("Should return an Exception when a number was negative", () => {
    try {
      const stringNumber: string = "10,4,-1";
      expect(new Calculator().Add(stringNumber));
    } catch (e) {
      expect(e.message).toBe("negatives not allowed");
    }
  });
});
