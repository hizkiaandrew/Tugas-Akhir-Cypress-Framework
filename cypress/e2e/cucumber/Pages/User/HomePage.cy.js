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
}
const home = new HomePage();
export default home;
