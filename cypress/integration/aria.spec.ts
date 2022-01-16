it("is accessible", () => {
  cy.visit("/");
  cy.get('[aria-label="users"]')
    .should("be.visible")
    .get("[aria-label=user]")
    .should("have.length", 10);
});
