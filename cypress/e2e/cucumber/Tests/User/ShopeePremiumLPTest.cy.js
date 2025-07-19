/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import shopeePremiumLP from "../../Pages/User/ShopeePremiumLPPage.cy";

When("User go to Shopee Premium LP by url", () => {
  shopeePremiumLP.goToShopeePremiumLPByUrl();
});

Then("User is navigated to Shopee Premium LP", () => {
  shopeePremiumLP.verifyUserInShopeePremiumLPPage();
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
