class forgotPasswordPage {
  visit() {
    cy.visit("/auth/requestPasswordResetCode");
  }

  verificationForgotPasswordPage() {
    cy.url().should("include", "/auth/requestPasswordResetCode");
    cy.xpath("//h6[@class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']").should("contain.text", "Reset Password");
    cy.xpath("//p[@class='oxd-text oxd-text--p']").should("contain.text", "Please enter your username to identify your account to reset your password");
  }

  inputEmail(email) {
    cy.xpath("//input[@placeholder='Username']").type(email);
    cy.xpath("//input[@placeholder='Username']").should("contain.value", email);
  }

  submitForgotPassword() {
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset").as("sendPasswordReset"); //INTERCEPT
    cy.xpath("//button[@type='submit']").click();
    cy.wait("@sendPasswordReset");
  }

  verifyForgotPasswordSuccess() {
    cy.xpath("//h6[@class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']").should("contain.text", "Reset Password link sent successfully");
  }
}

export default new forgotPasswordPage();
