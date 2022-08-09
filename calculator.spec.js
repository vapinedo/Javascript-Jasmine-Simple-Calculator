describe("TEST SUITE :: calculator.js", () => {
  describe("Calculator Constructor", () => {
    let calculator;
    let calculatorCopy;

    // executes before each and every spec in suite
    beforeEach(() => {
      calculator = new Calculator();
      calculatorCopy = new Calculator();
    });

    // executes after each and every spec in suite
    afterEach(() => {
      // usefull for cleaning up
    });

    // toBeNull Matcher
    it("can overrite total value", () => {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    // anything matcher
    it("should return the total as value", () => {
      calculator.total = 2;
      expect(calculator.total).toEqual(jasmine.anything()); // anything other than null or undefined
    });

    // any matcher
    it("should be an instance", () => {
      calculator.total = 10;
      expect(calculator).toEqual(jasmine.any(Object));
      expect(calculator.total).toEqual(jasmine.any(Number));
    });

    // objectContaining & stringContaining
    it("should contain total as key", () => {
      calculator.total = 10;
      expect(calculator).toEqual(jasmine.objectContaining({ total: 10 }));
      expect(typeof calculator.total).toEqual(jasmine.stringContaining("mber"));
    });

    // toContain ( for arrays & strings ) Matcher
    it("should have the calculator constructor", () => {
      let arr = [1, 2, 3, 4];
      expect(arr).toContain(3);
      expect(calculator.constructor.name).toContain("alc");
    });

    // toBe Matcher
    it("should initialize the total", () => {
      expect(calculator.total).toBe(0);
    });

    // toEqual Matcher
    it("should initialize the constructor", () => {
      const calculator = new Calculator();
      expect(calculator).toEqual(calculator);
    });

    // not Matcher
    // it("should have unique calculator object", () => {
    //   expect(calculator).not.toBe(calculator);
    // });

    // toBeDefined & toBeUndefined Matcher
    it("should have common methods", () => {
      expect(calculator.add).not.toBeUndefined();
      expect(calculator.subtract).not.toBeUndefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).not.toBeUndefined();
    });

    // toBeCalculator Custom Matcher
    it("should be an instance of Calculator", () => {
      jasmine.addMatchers(CustomMatcher);
      calculator.total = 10;
      expect(calculator).toBeCalculator();
      // expect(calculator).not.toBeCalculator();
      // expect(calculator.total).not.toBeCalculator();
    });

    describe("add()", () => {
      // toBe Matcher
      it("should add number to the total", () => {
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });

      // toMatch Matcher
      it("should return total a number", () => {
        calculator.total = 10;
        expect(calculator.add(10)).toBe(20);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch("ber");
      });
    });

    describe("subtract()", () => {
      // toBe Matcher
      it("should subtract number from the total", () => {
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe("multiply()", () => {
      // toBe Matcher
      it("should multiply number with the total", () => {
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);
      });

      // toBeNaN Matcher
      it("should not handle NaN for multiply", () => {
        calculator.total = 10;
        calculator.multiply("a");
        expect(calculator.total).toBeNaN();
      });
    });

    describe("divide()", () => {
      // toBe Matcher
      it("should divide number by the total", () => {
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
      });

      // toThrow Matcher
      it("should throw error when divide by zero", () => {
        calculator.total = 10;
        expect(() => calculator.divide(0)).toThrow();
        const divisor = 0;
        expect(() => calculator.divide(divisor)).toThrow(
          new Error(`Error trying to divide by: ${divisor}`)
        );
      });

      // toThrowError Matcher
      it("should throw error with message, when divide by zero", () => {
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

    describe("get version", function () {
      it("should fetches version from external source", function (done) {
        spyOn(window, "fetch").and.returnValue(
          Promise.resolve(new Response('{"version": "2.0"}'))
        );
        calculator.version.then(function (version) {
          expect(version).toBe("2.0");
          done();
        });
      });
    });
  });
});
