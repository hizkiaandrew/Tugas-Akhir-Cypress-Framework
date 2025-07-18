/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaSocialMedia from "../../Pages/User/PilihanJasaSocialMediaPage.cy";

When("User go to Pilihan Jasa Management Socmed via url", () => {
  pilihanJasaSocialMedia.goToPilihanJasaSocmedPageWithUrl();
});

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
  "User is navigated to whatsapp {string} or checkout page Pilihan Jasa Management Social Media", (url) => {
    pilihanJasaSocialMedia.isUserClickSayaMauOrKontakAdminBtn(url);
  }
);
