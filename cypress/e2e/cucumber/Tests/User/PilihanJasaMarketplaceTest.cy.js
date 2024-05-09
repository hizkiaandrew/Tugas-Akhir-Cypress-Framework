/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import pilihanJasaMarketplace from "../../Pages/User/PilihanJasaMarketplacePage.cy";

Then("User is navigated to Marketplace Management page", () => {
    pilihanJasaMarketplace.verifyUserPilihanJasaMarketplacePage();
});