import { scrollThenClick } from "../../Utils/baseClass.cy";
import { LOGIN_URL } from "../../Utils/variable";
class LoginPage {
  goToLoginWithURL() {
    cy.visit(LOGIN_URL);
  }

  verifyUserOnLoginPage() {
    cy.url().should("eq", LOGIN_URL);
  }

  inputEmail(email) {
    cy.get("[data-testid='login-field-email']").type(email);
  }

  inputPassword(password) {
    cy.get("[data-testid='login-password']").type(password);
  }

  clickMasukBtn() {
    scrollThenClick("[data-testid='login-btn-login']");
  }

  wrongEmailPasswordShowed() {
    cy.get("[data-testid='messagebox-error']").should("be.visible");
  }

  wrongEmailFormatShowed() {
    cy.get("[data-testid='login-error-message-email']").should("be.visible");
  }
  verifyUserAlredyLoggedIn() {
    cy.wait(3000)
    cy.getCookie("staging-UserID").should('exist');
  }
}
const login = new LoginPage();
export default login;
