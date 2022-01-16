it("shows stub data", () => {
  cy.intercept("/users", { fixture: "users.json" }).as("users");
  cy.visit("/");
  cy.get("[data-testid=user]").should("have.length", 3);
});
