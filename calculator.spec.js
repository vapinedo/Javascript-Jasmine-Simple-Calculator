describe("Test Suites :: calculator.js", () => {
  it("should add number to the total", () => {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });
  it("should subtract number from the total", () => {});
  it("should multiply number with the total", () => {});
  it("should divide number by the total", () => {});
});
