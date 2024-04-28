class HomePage {
  goToHomePageByUrl() {
    cy.visit("https://staging.komunitasmea.com/");
  }

  verifyUserOnHomePage() {
    cy.url().should("include", "https://staging.komunitasmea.com/");
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
