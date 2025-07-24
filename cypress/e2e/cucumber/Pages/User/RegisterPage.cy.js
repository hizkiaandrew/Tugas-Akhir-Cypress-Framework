import { clickElementBySelector, goToPageByUrl, inputBySelector, isContainSameLink } from "../../Utils/baseClass.cy";
import { LOGIN_URL } from "../../Utils/variable";
class RegisterPage {
  generateEmail(length) {
    let characters =
      "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = " ";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  clickRegisterTab() {
    clickElementBySelector("#form-tab-register");
  }

  verifyUserOnRegisterTab() {
    cy.get("#form-tab-register").should("have.attr", "aria-selected");
  }

  goToLoginWithURL() {
    goToPageByUrl(LOGIN_URL);
  }

  verifyUserOnLoginPage() {
    isContainSameLink(LOGIN_URL);
  }

  inputUserName(username) {
    inputBySelector(
      "[data-testid='register-field'] [data-testid='register-field-name']", username
    );
  }

  inputEmail(email) {
    let generatedEmail = this.generateEmail(10);
    inputBySelector(
      "[data-testid='register-field'] [data-testid='register-field-email']",
      email + generatedEmail + "@email.com"
    );
  }

  inputPhoneNumber(phoneNumber) {
    inputBySelector(
      "[data-testid='register-field'] [data-testid='register-field-phone-number']", phoneNumber
    );
  }

  inputPassword(password) {
    inputBySelector(
      "[data-testid='register-field'] [data-testid='register-password']", password);
  }

  clickRegisterButton() {
    clickElementBySelector("[data-testid='register-btn-daftar']");
  }
}
const register = new RegisterPage();
export default register;
