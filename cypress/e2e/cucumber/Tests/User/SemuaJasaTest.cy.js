/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import semuaJasa from "../../Pages/User/SemuaJasaPage.cy";

When("User go to Semua Jasa page via url" ,() => {
    semuaJasa.goToSemuaJasaWithUrl();
});

Then("User is navigated to Semua Jasa page", () => {
    semuaJasa.verifyUserInSemuaJasaPage();
});