describe("TEST SUITE :: calculator.js", () => {
  describe("Calculator Constructor", () => {
    // toBeNull Matcher
    it("can overrite total value", () => {
      const calculator = new Calculator();
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    // anything matcher
    it("should return the total as value", () => {
      const calculator = new Calculator();
      calculator.total = 2;
      expect(calculator.total).toEqual(jasmine.anything()); // anything other than null or undefined
    });

    // any matcher
    it("should be an instance", () => {
      const calculator = new Calculator();
      calculator.total = 10;
      expect(calculator).toEqual(jasmine.any(Object));
      expect(calculator.total).toEqual(jasmine.any(Number));
    });

    // objectContaining & stringContaining
    it("should contain total as key", () => {
      const calculator = new Calculator();
      calculator.total = 10;
      expect(calculator).toEqual(jasmine.objectContaining({ total: 10 }));
      expect(typeof calculator.total).toEqual(jasmine.stringContaining("mber"));
    });

    // toContain ( for arrays & strings ) Matcher
    it("should have the calculator constructor", () => {
      const calculator = new Calculator();
      let arr = [1, 2, 3, 4];
      expect(arr).toContain(3);
      expect(calculator.constructor.name).toContain("alc");
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

    // toBeCalculator Custom Matcher
    it("should be an instance of Calculator", () => {
      jasmine.addMatchers(CustomMatcher);
      const calculator = new Calculator();
      calculator.total = 10;
      expect(calculator).toBeCalculator();
      // expect(calculator).not.toBeCalculator();
      // expect(calculator.total).not.toBeCalculator();
    });

    describe("add()", () => {
      // toBe Matcher
      it("should add number to the total", () => {
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });

      // toMatch Matcher
      it("should return total a number", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        expect(calculator.add(10)).toBe(20);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch("ber");
      });
    });

    describe("subtract()", () => {
      // toBe Matcher
      it("should subtract number from the total", () => {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe("multiply()", () => {
      // toBe Matcher
      it("should multiply number with the total", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);
      });

      // toBeNaN Matcher
      it("should not handle NaN for multiply", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply("a");
        expect(calculator.total).toBeNaN();
      });
    });

    describe("divide()", () => {
      // toBe Matcher
      it("should divide number by the total", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
      });

      // toThrow Matcher
      it("should throw error when divide by zero", () => {
        const calculator = new Calculator();
        calculator.total = 10;
        expect(() => calculator.divide(0)).toThrow();
        const divisor = 0;
        expect(() => calculator.divide(divisor)).toThrow(
          new Error(`Error trying to divide by: ${divisor}`)
        );
      });

      // toThrowError Matcher
      it("should throw error with message, when divide by zero", () => {
        const calculator = new Calculator();
        const number = 0;
        calculator.total = number;
        expect(function () {
          calculator.divide(number);
        }).toThrowError();
        expect(() => calculator.divide(number)).toThrowError(
          `Error trying to divide by: ${number}`
        );
        expect(() => calculator.divide(number)).toThrowError(
          ArithmeticError,
          `Error trying to divide by: ${number}`
        );
      });
    });
  });
});
