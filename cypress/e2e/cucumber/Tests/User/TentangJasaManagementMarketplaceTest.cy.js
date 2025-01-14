/// <reference types="cypress" />
import { And, Then } from "cypress-cucumber-preprocessor/steps";
import tentangJasaManagement from "../../Pages/User/TentangJasaManagementMarketplacePage.cy";

When("User go to Tentang Jasa Management Marketplace via url", () => {
    tentangJasaManagement.goToJasaManagementWithUrl();
});

Then("User in Tentang Jasa Management Marketplace page", () => {
  tentangJasaManagement.verifyUserinJasaManagementPage();
});

And("User click paket jasa pak encep", () => {
    tentangJasaManagement.clickPaketPakEncep();
});

And("User click paket jasa pak rosidi", () => {
  tentangJasaManagement.clickPaketPakRosidi();
});

And("User click paket jasa pak odang", () => {
  tentangJasaManagement.clickPaketPakOdang();
});

And("User click paket jasa pak untung", () => {
  tentangJasaManagement.clickPaketPakUntung();
});

Then("User is navigated to whatsapp jasa pak encep", () => {
    tentangJasaManagement.verifyWhatsappJasaPakEncep();
});

Then("User is navigated to whatsapp jasa pak rosidi", () => {
  tentangJasaManagement.verifyWhatsappJasaPakRosidi();
});

Then("User is navigated to whatsapp jasa pak odang", () => {
  tentangJasaManagement.verifyWhatsappJasaPakOdang();
});

Then("User is navigated to whatsapp jasa pak untung", () => {
  tentangJasaManagement.verifyWhatsappJasaPakUntung();
});
