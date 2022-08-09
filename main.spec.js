describe("TEST SUITE :: main.js", () => {
  describe("calculate()", () => {
    it("should validate expression if the first number is invalid", () => {
      const expression = "a+3";
      spyOn(window, "updateResult"); // and.stub is the default one and can be omitted
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should validate expression if the second number is invalid", () => {
      const expression = "3+a";
      spyOn(window, "updateResult");
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should validate expression if the operaiton is invalid", () => {
      const expression = "3_5";
      spyOn(window, "updateResult");
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should calls add", function () {
      const spy = spyOn(Calculator.prototype, "add");
      calculate("3+2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
    });

    it("should calls subtract", () => {
      const spy = spyOn(Calculator.prototype, "subtract");
      calculate("3-2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(2);
      expect(spy).not.toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should calls multiply", () => {
      const spy = spyOn(Calculator.prototype, "multiply");
      calculate("3*2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(2);
      expect(spy).not.toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should calls divide", () => {
      const spy = spyOn(Calculator.prototype, "divide");
      calculate("10/2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(2);
      expect(spy).not.toHaveBeenCalledWith(10);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should calls updateResult (example for callThrough)", () => {
      spyOn(window, "updateResult");
      const spy = spyOn(Calculator.prototype, "multiply").and.callThrough();
      calculate("3*12");
      expect(window.updateResult).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(36);
    });

    it("should calls updateResult (example for callFake)", () => {
      spyOn(window, "updateResult");
      const spy = spyOn(Calculator.prototype, "multiply").and.callFake(() => {
        return "Fake call";
      });
      calculate("3*12");
      expect(window.updateResult).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Fake call");
    });

    it("should calls updateResult (example for returnValue)", () => {
      spyOn(window, "updateResult");
      const spy = spyOn(Calculator.prototype, "multiply").and.returnValue(
        "returns a value"
      );
      calculate("3*12");
      expect(window.updateResult).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("returns a value");
    });

    it("should calls updateResult (example for returnValues)", () => {
      spyOn(window, "updateResult");
      const spy = spyOn(Calculator.prototype, "add").and.returnValues(
        null,
        "second call"
      );
      calculate("3+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("second call");
    });

    it("should does not handle errors", () => {
      const spy = spyOn(Calculator.prototype, "multiply").and.throwError(
        "Some error"
      );
      expect(() => calculate("3*3")).toThrowError("Some error");
    });
  });

  describe("updateResult()", function () {
    beforeAll(function () {
      const element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
      this.element = element;
    });

    afterAll(function () {
      document.body.removeChild(this.element);
    });

    it("should add result to the DOM Element", function () {
      updateResult("5");
      expect(this.element.innerText).toBe("5");
    });
  });

  xdescribe("showVersion()", () => {
    it("should call the showVersion method", () => {
      spyOn(document, "getElementById").and.returnValue({
        innerText: null,
      });
      const spyCalculatorVersion = spyOnProperty(Calculator.prototype, "version", "get").and.returnValue("3.0")
      showVersion();
      expect(spyCalculatorVersion).toHaveBeenCalled(); 
      expect(spyCalculatorVersion).toHaveBeenCalledTimes(1); 
      expect(spyCalculatorVersion()).toEqual("3.0"); 
    });
  });
});
