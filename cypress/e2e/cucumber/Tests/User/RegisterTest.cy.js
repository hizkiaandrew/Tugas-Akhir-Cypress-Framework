/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/User/LoginPage.cy";
import register from "../../Pages/User/RegisterPage.cy";
import home from "../../Pages/User/Homepage.cy";

And("User is able to click register tab", () =>{
    register.clickRegisterTab();
});

Then("User can see register form", () => {
    register.verifyUserOnRegisterTab();
});

And("User is on register tab", () => {
    register.clickRegisterTab();
});

When(
  "User register by entering username field with value {string}",
  (username) => {
    register.inputUserName(username);
  }
);

And("User register by entering email field with value {string}", (email) => {
    register.inputEmail(email);
})

And("User register by entering phone number field with value {string}", (phoneNumber) => {
    register.inputPhoneNumber(phoneNumber);
})

And("User register by entering password field with value {string}", (password) => {
    register.inputPassword(password);
})

Then("User click register button", () => {
    register.clickRegisterButton();
})

And("User is navigated to home page to start quick tutorial", () => {
    home.verifyUserOnHomePage();
})