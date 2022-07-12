describe("HTTP requests", () => {
  // beforeEach(function () {
  //   cy.task("getNoAuth", "Auth success");
  // });

  it("Get endpoint with no auth", () => {
    cy.log("test");

    cy.task("getNoAuth").then((res: any) => {
      cy.log(res);
    });
  });
});
