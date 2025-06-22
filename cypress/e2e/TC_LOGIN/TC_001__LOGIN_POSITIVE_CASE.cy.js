import loginPage from "../../support/pageComponent/Login/loginComponent";
import loginData from "../../fixtures/data/loginData/loginData.json";
describe("LOGIN FEATURE", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC_001_LOGIN - Login with valid credentials", () => {
    loginPage.urlVerificationHome();
    loginPage.inputCredentials(loginData.valid.username, loginData.valid.password);
    loginPage.clickLoginButton();
    loginPage.verifyLoginSuccess();
  });
});
