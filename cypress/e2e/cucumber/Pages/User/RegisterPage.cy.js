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
    cy.get("#form-tab-register").click();
  }

  verifyUserOnRegisterTab() {
    cy.get("#form-tab-register").should("have.attr", "aria-selected");
  }

  goToLoginWithURL() {
    cy.visit("https://staging.komunitasmea.com/login");
  }

  verifyUserOnLoginPage() {
    cy.url().should("include", "https://staging.komunitasmea.com/login");
  }

  inputUserName(username) {
    cy.get(
      "[data-testid='register-field'] [data-testid='register-field-name']"
    ).type(username);
  }

  inputEmail(email) {
    let generatedEmail = this.generateEmail(10);
    cy.get(
      "[data-testid='register-field'] [data-testid='register-field-email']"
    ).type(email + generatedEmail + "@email.com");
  }

  inputPhoneNumber(phoneNumber) {
    cy.get(
      "[data-testid='register-field'] [data-testid='register-field-phone-number']"
    ).type(phoneNumber);
  }

  inputPassword(password) {
    cy.get(
      "[data-testid='register-field'] [data-testid='register-password']"
    ).type(password);
  }

  clickRegisterButton() {
    cy.get("[data-testid='register-btn-daftar']").click();
  }
}
const register = new RegisterPage();
export default register;
