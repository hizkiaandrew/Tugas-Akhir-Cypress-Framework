/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaSocialMedia from "../../Pages/User/PilihanJasaSocialMediaPage.cy";

Then("User is navigated to Social Media Management page", () => {
  pilihanJasaSocialMedia.verifyUserPilihanJasaSocialMediaPage();
});
