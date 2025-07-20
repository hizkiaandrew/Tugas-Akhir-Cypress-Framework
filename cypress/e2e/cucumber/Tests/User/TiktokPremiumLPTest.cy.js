/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import tiktokPremiumLP from "../../Pages/User/TiktokPremiumLPPage.cy";

When("User go to Tiktok Premium LP by url", () => {
  tiktokPremiumLP.goToTiktokPremiumLPByUrl();
});

Then("User is navigated to Tiktok Premium LP", () => {
  tiktokPremiumLP.verifyUserInTiktokPremiumLPPage();
});

And("User click Saya Mau on Tiktok Premium Plus", () => {
  tiktokPremiumLP.clickSayaMauTiktokPremiumPlus();
});

Then("User is navigated to checkout page Super Mentor Tiktok Bundle", () => {
  tiktokPremiumLP.verifyUserInCheckoutSuperMentorTiktokBundle();
});

And("User click Saya Mau on Tiktok Premium", () => {
  tiktokPremiumLP.clickSayaMauTiktokPremium();
});

Then("User is navigated to checkout page Tiktok Premium", () => {
  tiktokPremiumLP.verifyUserInCheckoutTiktokPremium();
});

And("User click Lihat Jasa on Management Social Media", () => {
  tiktokPremiumLP.clickLihatJasaMagementSocialMedia();
});


