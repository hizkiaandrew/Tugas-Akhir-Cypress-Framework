class LoginPage {
  goToLoginWithURL() {
    cy.visit("https://staging.komunitasmea.com/login");
  }

  verifyUserOnLoginPage() {
    cy.url().should("eq", "https://staging.komunitasmea.com/login");
  }

  inputEmail(email) {
    cy.get("[data-testid='login-field-email']").type(email);
  }

  inputPassword(password) {
    cy.get("[data-testid='login-password']").type(password);
  }

  clickMasukBtn() {
    cy.get("[data-testid='login-btn-login']").click();
  }

  wrongEmailPasswordShowed() {
    cy.get("[data-testid='messagebox-error']").should('be.visible');
  }

  wrongEmailFormatShowed() {
    cy.get("[data-testid='login-error-message-email']").should('be.visible');
  }
}
const login = new LoginPage();
export default login;
