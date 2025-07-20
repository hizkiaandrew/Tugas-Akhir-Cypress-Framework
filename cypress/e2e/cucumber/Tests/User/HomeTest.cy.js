/// <reference types="cypress" />
import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import home from "../../Pages/User/Homepage.cy";
Given("User is on Home Page", () => {
    home.goToHomePageByUrl();
    home.verifyUserOnHomePage();
});

And("User is not logged in yet", () => {
    home.verifyUserStagingCookieID();
});

When("User enter {string} on home search field", (courseName) => {
    home.enterTextOnSearchField(courseName);
});

And("User click search on search field", () => {
    home.clickSearchOnSearchField();
});
