/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaMarketplace from "../../Pages/User/PilihanJasaMarketplacePage.cy";

When("User go to Pilihan Jasa Management Marketplace via url", () => {
    pilihanJasaMarketplace.goToPilihanJasaMarketplacePageWithUrl();
});

Then("User is navigated to Jasa Management Markeplace", () => {
    pilihanJasaMarketplace.verifyUserPilihanJasaMarketplacePage();
});
And("User click service {string} in Pilihan Jasa Management Marketplace", (locator) => {
    pilihanJasaMarketplace.clickService(locator);
});
Then("User is navigated to whatsapp {string} or checkout page Jasa Management Marketplace", (url) => {
    pilihanJasaMarketplace.isUserClickSayaMauOrKontakAdminBtn(url);
});