/// <reference types="cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import home from "../../Pages/User/HomePage.cy";
import login from "../../Pages/User/LoginPage.cy";
import { TEST_EMAIL, TEST_PASSWORD } from "../../Utils/variable";
When("User go to Login Page via url", () => {
  login.goToLoginWithURL();
});

Then("User is navigated to Login Page", () => {
  login.verifyUserOnLoginPage();
});

Given("User is on login page", () => {
  login.goToLoginWithURL();
  login.verifyUserOnLoginPage();
});

When("User login by entering email field with value {string}", (email) => {
  login.inputEmail(email);
});

And("User login by entering password field with value {string}", (password) => {
  login.inputPassword(password);
});

Then("User submitted all input field", () => {
  login.clickMasukBtn();
});

And("User is navigated to home page", () => {
  home.verifyUserOnHomePage();
});

But("User cannot be logged in", () => {
  home.verifyUserOnHomePage();
});

And("Error wrong email or password message showed", () => {
  login.wrongEmailPasswordShowed();
});

And("Error email format message showed", () => {
  login.wrongEmailFormatShowed();
});

Given("User is already logged in", () => {
  login.goToLoginWithURL();
  login.inputEmail(TEST_EMAIL);
  login.inputPassword(TEST_PASSWORD);
  login.clickMasukBtn();
  login.verifyUserAlredyLoggedIn();
});


