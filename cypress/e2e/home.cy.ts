describe("Home", () => {
  it("toggle Theme", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="header-title"]').should(
      "have.css",
      "color",
      "rgb(26, 32, 44)"
    );
    cy.get('[data-testid="toggleTheme"]').click();
    cy.get('[data-testid="header-title"]').should(
      "have.css",
      "color",
      "rgba(255, 255, 255, 0.92)"
    );
  });
});
