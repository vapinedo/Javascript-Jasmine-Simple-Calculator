describe("TEST SUITE :: calculator.js", () => {
  // toBe Matcher
  it("should add number to the total", () => {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  // toBe Matcher
  it("should subtract number from the total", () => {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);
    expect(calculator.total).toBe(25);
  });

  // toBe Matcher
  it("should multiply number with the total", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(2);
    expect(calculator.total).toBe(20);
  });

  // toBe Matcher
  it("should divide number by the total", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.divide(2);
    expect(calculator.total).toBe(5);
  });

  // toBe Matcher
  it("should initialize the total", () => {
    const calculator = new Calculator();
    expect(calculator.total).toBe(0);
  });

  // toEqual Matcher
  it("should initialize the constructor", () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).toEqual(calculator2);
  });

  // not Matcher
  it("should have unique calculator object", () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2);
  });

  // toBeDefined & toBeUndefined Matcher
  it("should have common methods", () => {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.subtract).not.toBeUndefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).not.toBeUndefined();
  });

  // toBeNull Matcher
  it("can overrite total value", () => {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  // toContain ( for arrays & strings ) Matcher
  it('should have the calculator constructor', () => {
    const calculator = new Calculator();
    let arr = [1, 2, 3, 4];
    expect(arr).toContain(3);
    expect(calculator.constructor.name).toContain('alc');
  });

  // toBeNaN Matcher
  it('should not handle NaN for multiply', () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply('a');
    expect(calculator.total).toBeNaN();
  });

  // toThrow Matcher
  it('should throw error when divide by zero', () => {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(() => calculator.divide(0)).toThrow();
    const divisor = 0;
    expect(() => calculator.divide(divisor)).toThrow(new Error(`Error trying to divide by: ${divisor}`));
  });
});
