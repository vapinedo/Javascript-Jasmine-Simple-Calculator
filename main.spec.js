describe("TEST SUITE :: main.js", () => {
  describe("calculate()", () => {
    it("should validate expression if the first number is invalid", () => {
      const expression = "a+3";
      spyOn(window, "updateResult"); // and.stub is the default one and can be omitted
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Expression not recognized");
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    
    it('should validate expression if the second number is invalid', () => {
      const expression = "3+a";
      spyOn(window, "updateResult");
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Expression not recognized");
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    
    it('should validate expression if the operaiton is invalid', () => {
      const expression = "3_5";
      spyOn(window, "updateResult");
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Expression not recognized");
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should calls add", function() {
      const spy = spyOn(Calculator.prototype, "add");
      calculate("3+2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
    });

    xit("should calls subtract");
    xit("should calls multiply");
    xit("should calls divide");
    xit("should validate operation");
    xit("should calls updateResult");
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
});
