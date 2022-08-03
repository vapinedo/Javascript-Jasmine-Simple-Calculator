describe("TEST SUITE :: main.js", () => {
  describe("calculate()", () => {
    it("should validate expression if the first number is invalid", () => {
      const expression = "a+3";
      spyOn(window, "updateResult").and.stub();
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
    });

    it('should validate expression if the second number is invalid', () => {
      const expression = "3+a";
      spyOn(window, "updateResult").and.stub();
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
    });
    
    it('should validate expression if the operaiton is invalid', () => {
      const expression = "3_5";
      spyOn(window, "updateResult").and.stub();
      calculate(expression);
      expect(window.updateResult).toHaveBeenCalled();
    });

    xit("should call add");
    xit("should call subtract");
    xit("should call multiply");
    xit("should call divide");
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
