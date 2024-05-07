/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import home from "../../Pages/User/Homepage.cy";
Given("User is on Home Page", () => {
    home.goToHomePageByUrl();
    home.verifyUserOnHomePage();
});

And("User is not logged in yet", () => {
    home.verifyUserStagingCookieID();
});
