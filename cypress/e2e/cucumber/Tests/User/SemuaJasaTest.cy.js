/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import semuaJasa from "../../Pages/User/SemuaJasaPage.cy";

When("User go to Semua Jasa page via url" ,() => {
    semuaJasa.goToSemuaJasaWithUrl();
});

Then("User is navigated to Semua Jasa page", () => {
    semuaJasa.verifyUserInSemuaJasaPage();
});

And("User click Kontak admin mea", () => {
    semuaJasa.clickKontakAdminMeaBtn();
});

Then("User is navigated to whatsapp jasa mea", () => {
    semuaJasa.verifyWhatsappJasaOpenedOnNewTab();
});

When("User click Marketplace Management", () => {
    semuaJasa.clickMarketplaceManagementBtn();
});

And("User click Social Media Management", () => {
    semuaJasa.clickSocialMediaManagementBtn();
});

And("User click Search Engine Marketing Management", () => {
    semuaJasa.clickSearchEngineMarketingManagementBtn();
});

Then("User is navigated to Search Engine Marketing Management page", () => {
    semuaJasa.verifyWhatsappJasaSearchEngineMarketingManagement();
});

And("User click Email Marketing Management", () => {
    semuaJasa.clickEmailMarketingManagementBtn();
});

Then("User is navigated to whatsapp Email Marketing page", () => {
    semuaJasa.verifyWhatsappEmailMarketing();
});

And("User click Fotografi dan Video Produk", () => {
    semuaJasa.clickBtnFotografiDanVideoProduk();
});

Then("User is navigated to whatsapp Fotografi and Video Produk",
  () => {
    semuaJasa.verifyWhatsappFotografiDanVideoProduk();
  });

And("User click Webinar", () => {
    semuaJasa.clickBtnWebinar();
});

Then("User is navigated to whatsapp Webinar", () => {
    semuaJasa.verifyWhatsappWebinar();
});

And("User click Training and Coaching", () => {
    semuaJasa.clickTrainingAndCoaching();
});