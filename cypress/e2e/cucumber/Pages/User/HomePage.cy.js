import { HOME_URL } from "../../Utils/variable";
class HomePage {
  goToHomePageByUrl() {
    cy.visit(HOME_URL);
  }

  verifyUserOnHomePage() {
    cy.url().should("include", HOME_URL);
  }

  verifyUserStagingCookieID() {
    cy.getCookie("staging-UserID").should("be.null");
  }

  startQuickTutorial() {
    this.skipVerifyAccount();
    this.startQuickTutorial();
  }
  enterTextOnSearchField(courseName) {
    let element = cy.get(
      ".container .section-category-and-search .form-input-search form div input[placeholder='Pencarian Kelas dan Event']"
    );
    element.type(courseName);
  }

  clickSearchOnSearchField() {
    cy.wait(500);
    let element = cy.get(
      ".container .section-category-and-search .form-input-search form div div.form-input-search__icon svg"
    );
    element.click();
  }
  
}
const home = new HomePage();
export default home;
