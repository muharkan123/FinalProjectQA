import directoryPage from "../../support/pageComponent/Directory/directoryComponent";
describe("DIRECTORY FEATURE", () => {
  beforeEach(() => {
    directoryPage.loginSession();
    directoryPage.verifyLoginSuccess();
  });

  it("TC_005_DIRECTORY_RESET-EMPLOYEE-SEARCH - Verification reset employee searching", () => {
    directoryPage.routeToDirectory();
    directoryPage.searchEmployee();
    directoryPage.resetEmployee();
  });
});
