import loginData from "../../fixtures/data/loginData/loginData.json";
import forgotPasswordPage from "../../support/pageComponent/ForgotPassword/forgotPasswordComponent";
describe("FORGOT PASSWORD FEATURE", () => {
  beforeEach(() => {
    forgotPasswordPage.visit();
  });

  it("TC_003_FORGOT-PASSWORD - Verification forgot password", () => {
    forgotPasswordPage.verificationForgotPasswordPage();
    forgotPasswordPage.inputEmail(loginData.valid.email);
    forgotPasswordPage.submitForgotPassword();
    forgotPasswordPage.verifyForgotPasswordSuccess();
  });
});
