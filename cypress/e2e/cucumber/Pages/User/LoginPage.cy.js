import { customWait, goToPageByUrl, inputBySelector, isContainSameLink, isElementLocated, scrollThenClick } from "../../Utils/baseClass.cy";
import { LOGIN_URL } from "../../Utils/variable";
class LoginPage {
  goToLoginWithURL() {
    goToPageByUrl(LOGIN_URL);
  }

  verifyUserOnLoginPage() {
    isContainSameLink(LOGIN_URL);
  }

  inputEmail(email) {
    inputBySelector("[data-testid='login-field-email']",email);
  }

  inputPassword(password) {
    inputBySelector("[data-testid='login-password']", password);
  }

  clickMasukBtn() {
    scrollThenClick("[data-testid='login-btn-login']");
  }

  wrongEmailPasswordShowed() {
    isElementLocated("[data-testid='messagebox-error']");
  }

  wrongEmailFormatShowed() {
    isElementLocated("[data-testid='login-error-message-email']");
  }
  verifyUserAlredyLoggedIn() {
    customWait(3000);
    cy.getCookie("staging-UserID").should('exist');
  }
}
const login = new LoginPage();
export default login;
