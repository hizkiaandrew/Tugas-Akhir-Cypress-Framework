/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import shopeePremiumLP from "../../Pages/User/ShopeePremiumLPPage.cy";

When("User go to Shopee Premium LP by url", () => {
  shopeePremiumLP.goToShopeePremiumLPByUrl();
});

Then("User is navigated to Shopee Premium LP", () => {
  shopeePremiumLP.verifyUserInShopeePremiumLPPage();
});

And(
  "User click Saya Mau on Marketplace Mastery Basic from Shopee Premium LP",
  () => {
    shopeePremiumLP.clickSayaMauMarketplaceMasteryBasic();
  }
);

Then("User is navigated to checkout page Marketplace Mastery Basic", () => {
  shopeePremiumLP.verifyUserInCheckoutPageMarketplaceMasteryBasic();
});

And("User click Saya Mau on Shopee Premium", () => {
  shopeePremiumLP.clickSayaMauShopeePremium();
});

Then("User is navigated to checkout page Shopee Premium", () => {
  shopeePremiumLP.verifyUserInCheckoutPageShopeePremium();
});

And("User click Saya Mau on Shopee Premium Plus", () => {
  shopeePremiumLP.clickSayaMauShopeePremiumPlus();
});

Then("User is navigated to checkout page Super Mentor Shopee Bundle", () => {
  shopeePremiumLP.verifyUserInCheckoutSuperMentorShopeeBundle();
});

And("User click Lihat Jasa on Management Marketplace", () => {
  shopeePremiumLP.clickLihatJasaManagementMarketplace();
});


