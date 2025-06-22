
import directoryPage from "../../support/pageComponent/Directory/directoryComponent";
describe("DIRECTORY FEATURE", () => {
  beforeEach(() => {
    directoryPage.loginSession();
    directoryPage.verifyLoginSuccess();
  });

  it("TC_004_DIRECTORY_EMPLOYEE-SEARCH - Verification employee searching", () => {
    directoryPage.routeToDirectory();
    directoryPage.searchEmployee();
  });

  
});
