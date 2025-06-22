class loginPage {
  visit() {
    cy.visit("/auth/login");
  }

  urlVerificationHome() {
    cy.url().should("include", "/auth/login");
  }

  inputCredentials(username, password) {
    cy.xpath("//input[@placeholder='Username']").should("be.visible").type(username);
    cy.xpath("//input[@placeholder='Password']").should("be.visible").type(password);
    // cy.xpath("//input[@placeholder='Username']").should("have.value", username);
    // cy.xpath("//input[@placeholder='Password']").should("have.value", password);
  }

  clickLoginButton() {
    cy.intercept("POST", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate").as("validate"); //INTERCEPT
    cy.xpath("//button[@type='submit']").should("be.visible").click();
    cy.wait("@validate");
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
  }

  verifyLoginUnsuccessful() {
    cy.url().should("include", "/auth/login");
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text", "Invalid credentials");
  }
}

export default new loginPage();
