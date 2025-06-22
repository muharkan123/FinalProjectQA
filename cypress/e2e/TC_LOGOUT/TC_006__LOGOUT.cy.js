import loginPage from "../../support/pageComponent/Login/loginComponent";
import loginData from "../../fixtures/data/loginData/loginData.json";
import logoutPage from "../../support/pageComponent/Logout/logoutComponent";
describe("LOGOUT FEATURE", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC_006_LOGIN - Verification Logout", () => {
    loginPage.urlVerificationHome();
    loginPage.inputCredentials(loginData.valid.username, loginData.valid.password);
    loginPage.clickLoginButton();
    loginPage.verifyLoginSuccess();
    logoutPage.logout();
  });
});
