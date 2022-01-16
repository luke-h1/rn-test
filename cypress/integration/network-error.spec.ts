it("handles network error", () => {
  cy.intercept("/users", { forceNetworkError: true }).as('users');
  // observe the application's behavior
  // in our case, the app simply logs the error
  cy.visit("/", {
    onBeforeLoad(win) {
      cy.spy(win.console, "error").as("logError");
    },
  });
  cy.get("@logError").should("have.been.called");
  // confirm the loading indicator goes away
  cy.get("[data-testid=loading]").should("not.exist");
});
