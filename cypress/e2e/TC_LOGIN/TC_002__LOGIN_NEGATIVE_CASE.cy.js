import loginPage from "../../support/pageComponent/Login/loginComponent";
import loginData from "../../fixtures/data/loginData/loginData.json";
describe("LOGIN FEATURE", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("TC_002_LOGIN - Login with invalid credentials", () => {
    loginPage.urlVerificationHome();
    loginPage.inputCredentials(loginData.invalid.username, loginData.invalid.password);
    loginPage.clickLoginButton();
    loginPage.verifyLoginUnsuccessful();
  });
});
