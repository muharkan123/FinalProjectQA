class logoutPage {
  logout() {
    cy.get("span.oxd-userdropdown-tab").should("be.visible").click();
    cy.wait(2000);
    cy.contains("Logout").click();
    cy.wait(2000);
    cy.url().should("include", "/auth/login");
    cy.get('input[placeholder="Username"]').should("be.visible");
  }
}
export default new logoutPage();
