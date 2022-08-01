describe("TEST SUITE :: main.js", () => {
  describe("calculate()", () => {
    it("should validate the expression for invalid number", () => {
      spyOn(window, "updateResult").and.stub();
      calculate("a+3");
      // expect(calculate("a+3"))
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
