it("shows loading indicator", () => {
  // delay response by 1 second as response from API is too quick
  cy.intercept("/users", (req) => {
    return Cypress.Promise.delay(1000).then(() => req.continue());
  }).as("users");
  cy.visit("/");
  cy.get("[data-testid=loading]").should("be.visible");
  cy.get("[data-testid=loading]").should("not.exist");
  cy.wait("@users");
});
