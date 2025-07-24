/// <reference types="cypress" />
import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import home from "../../Pages/User/HomePage.cy.js";

Given("User is on Home Page", () => {
    home.goToHomePageByUrl();
    home.verifyUserOnHomePage();
});

And("User is not logged in yet", () => {
    home.verifyUserStagingCookieID();
});

When("User enter {string} on home search field", (courseName) => {
    home.enterTextOnSearchField(courseName);
});

And("User click search on search field", () => {
    home.clickSearchOnSearchField();
});

When("User click Login Button", () => {
    home.clickLoginButton();
});

When("User go to Semua Jasa page by navbar", () => {
    home.clickSemuaJasaNavbar();
});

When("User go to Tentang Jasa Management Marketplace by navbar", () => {
    home.clickTentangJasaManagementMarketplaceNavbar();
});

When("User go to Pilihan Jasa Management Marketplace by navbar", () => {
    home.clickPilihanJasaManagementNavbar();
});

When("User go to Tentang Jasa Management Socmed by navbar", () => {
    home.clickTentangJasaSocialMediaNavbar();
});

When("User go to Tentang Jasa Tiktok Shop by navbar", () => {
    home.clickTentangJasaTiktokShopNavbar();
});

When("User go to Pilihan Jasa Management Socmed by navbar", () => {
    home.clickPilihanJasaSocialMediaNavbar();
});

When("User go to Training and Coaching by navbar", () => {
    home.clickTrainingAndCoachingNavbar();
});

When("User go to Kelas List by navbar", () => {
    home.clickKelasNavbar();
});

Then("User in Daftar Kelas Premium Page", () => {
    home.verifyUserInDaftarKelasPremiumPage();
});