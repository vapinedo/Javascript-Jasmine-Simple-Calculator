describe("TEST SUITE :: calculator.js", () => {
  // toBe
  it("should add number to the total", () => {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  // toBe
  it("should subtract number from the total", () => {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);
    expect(calculator.total).toBe(25);
  });

  // toBe
  it("should multiply number with the total", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(2);
    expect(calculator.total).toBe(20);
  });

  // toBe
  it("should divide number by the total", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.divide(2);
    expect(calculator.total).toBe(5);
  });

  // toBe
  it("should initialize the total", () => {
    const calculator = new Calculator();
    expect(calculator.total).toBe(0);
  });

  // toEqual
  it("should initialize the constructor", () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).toEqual(calculator2);
  });

  // not
  it("should have unique calculator object", () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2);
  });

  // toBeDefined & toBeUndefined
  it("should have common methods", () => {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.subtract).not.toBeUndefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).not.toBeUndefined();
  });

  // toBeNull
  it("can overrite total value", () => {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  // toContain ( for arrays & strings )
  it('should have the calculator constructor', () => {
    const calculator = new Calculator();
    let arr = [1, 2, 3, 4];
    expect(arr).toContain(3);
    expect(calculator.constructor.name).toContain('alc');
  });
});
