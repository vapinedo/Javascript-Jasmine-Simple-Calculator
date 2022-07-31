describe("TEST SUITE :: main.js", () => {
  describe("main()", () => {
    xit("should validate the expression", () => {});
    xit("should call add");
    xit("should call subtract");
    xit("should call multiply");
    xit("should call divide");
    xit("should validate operation");
    xit("should calls updateResult");
  });
  describe("updateResult()", () => {
    let element = null;
    beforeAll(() => {
      element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
    });

    afterAll(() => {
      const element = document.getElementById("result");
      document.body.removeChild(element);
    });

    it("should add result to the DOM Element", () => {
      updateResult("5");
      expect(element.innerText).toBe("5");
    });
  });
});
