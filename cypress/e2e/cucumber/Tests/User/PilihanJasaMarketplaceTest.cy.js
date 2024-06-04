/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaMarketplace from "../../Pages/User/PilihanJasaMarketplacePage.cy";

When("User go to Pilihan Jasa Management Marketplace via url", () => {
    pilihanJasaMarketplace.goToPilihanJasaMarketplacePageWithUrl();
});

Then("User is navigated to Marketplace Management page", () => {
    pilihanJasaMarketplace.verifyUserPilihanJasaMarketplacePage();
});