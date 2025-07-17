/// <reference types="cypress" />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import tentangJasaManagementTiktokShop from "../../Pages/User/TentangJasaManagementTiktokShopPage.cy";

When("User go to Tentang Jasa Tiktok Shop via url", () => {
    tentangJasaManagementTiktokShop.goToJasaManagementTiktokShopWithUrl();
});

Then("User in Tentang Jasa Tiktok Shop page", () => {
    tentangJasaManagementTiktokShop.verifyUserinJasaManagementTiktokShopPage();
});

And("User click paket jasa bu lastri on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.clickJasaBuLastri();
});

Then(
  "User is navigated to whatsapp jasa bu lastri on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.verifyWhatsappJasaBuLastri();
  }
);

And("User click paket jasa bu lastri plus on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.clickJasaBuLastriPlus();
});

Then(
  "User is navigated to whatsapp jasa bu lastri plus on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.verifyWhatsappJasaBuLastriPlus();
  }
);

And("User click paket jasa bu sisil on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.clickJasaBuSisil();
});

Then("User is navigated to whatsapp jasa bu sisil on Tentang Jasa Tiktok Shop", () => {
    tentangJasaManagementTiktokShop.verifyWhatsappJasaBuSisil();
});
