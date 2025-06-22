class directoryPage {
  loginSession() {
    cy.fixture("data/loginData/loginData.json").then((loginData) => {
      cy.visit("auth/login");
      cy.get('input[name="username"]').type(loginData.valid.username);
      cy.get('input[name="password"]').type(loginData.valid.password);
      cy.get('button[type="submit"]').click();
    });
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
  }

  routeToDirectory() {
    cy.xpath("//span[normalize-space()='Directory']").should("contain.text", "Directory");
    cy.xpath("//span[normalize-space()='Directory']").click("");
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0").as("validate"); //INTERCEPT
    cy.xpath("//label[normalize-space()='Employee Name']").should("contain.text", "Employee Name");
    cy.wait("@validate");
  }

  searchEmployee() {
    cy.xpath("//input[@placeholder='Type for hints...']").type("Peter");
    cy.wait(2000);
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div').should("be.visible").should("have.text", "Peter Mac Anderson").click();
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&empNumber=3").as("search"); //INTERCEPT
    cy.xpath("//button[@type='submit']").click();
    cy.wait("@search");
    cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-directory-card-subtitle --break-words']").should("be.visible").should("have.text", "Chief Financial Officer");
  }

  resetEmployee() {
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0").as("resetEmployee"); //INTERCEPT
    cy.xpath("//button[@type='reset']").should("be.visible").click();
    cy.wait("@resetEmployee");
    cy.xpath("//span[@class='oxd-text oxd-text--span']").should("be.visible").should("contains.text", "Records Found");
  }
}

export default new directoryPage();
