/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaSocialMedia from "../../Pages/User/PilihanJasaSocialMediaPage.cy";

Then("User is navigated to Social Media Management page", () => {
  pilihanJasaSocialMedia.verifyUserPilihanJasaSocialMediaPage();
});

And("User in {string} tab", (locatorTab) => {
  pilihanJasaSocialMedia.clickSosmedTab(locatorTab);
});

When(
  "User click service {string} in Pilihan Jasa Management Social Media", (locator) => {
    pilihanJasaSocialMedia.clickServiceInPilihanJasaManagementSocmed(locator);
  }
);

Then(
  "User is navigated to whatsapp {string} or checkout page Pilihan Jasa Management Social Media", () => {
    pilihanJasaSocialMedia.isUserClickSayaMauOrKontakAdminBtn(url);
  }
);
