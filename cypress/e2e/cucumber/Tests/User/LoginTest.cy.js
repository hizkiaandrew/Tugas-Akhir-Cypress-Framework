/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/User/LoginPage.cy";
import home from "../../Pages/User/Homepage.cy";
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
