/// <reference types="cypress" />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import tentangJasaManagementTiktokShop from "../../Pages/User/TentangJasaManagementTiktokShopPage.cy";

When("User go to Tentang Jasa Tiktok Shop via url", () => {
    tentangJasaManagementTiktokShop.goToJasaManagementTiktokShopWithUrl();
});

Then("User in Tentang Jasa Tiktok Shop page", () => {
    tentangJasaManagementTiktokShop.verifyUserinJasaManagementTiktokShopPage();
});
