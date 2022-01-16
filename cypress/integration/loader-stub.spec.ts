it("shows loading indicator (stub)", () => {
  cy.intercept("/users", {
    fixture: "users.json",
    delay: 1000,
  }).as("users");
  cy.visit("/");
  cy.get("[data-testid=loading]").should("be.visible");
  cy.get("[data-testid=loading]").should("not.exist");
  cy.get("[data-testid=user]").should("have.length", 3);
});
