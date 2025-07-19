/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import tiktokPremiumLP from "../../Pages/User/TiktokPremiumLPPage.cy";

When("User go to Tiktok Premium LP by url", () => {
  tiktokPremiumLP.goToTiktokPremiumLPByUrl();
});

Then("User is navigated to Tiktok Premium LP", () => {
  tiktokPremiumLP.verifyUserInTiktokPremiumLPPage();
});

And("User in {string} tab", (locatorTab) => {
  pilihanJasaSocialMedia.clickSosmedTab(locatorTab);
});

When(
  "User click service {string} in Pilihan Jasa Management Social Media",
  (locator) => {
    pilihanJasaSocialMedia.clickServiceInPilihanJasaManagementSocmed(locator);
  }
);

Then(
  "User is navigated to whatsapp {string} or checkout page Pilihan Jasa Management Social Media",
  (url) => {
    pilihanJasaSocialMedia.isUserClickSayaMauOrKontakAdminBtn(url);
  }
);
