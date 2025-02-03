/// <reference types="cypress" />
import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import tentangJasaMangementSocmed from "../../Pages/User/TentangJasaManagementSocmedPage.cy";

When("User go to Tentang Jasa Management Socmed via url", () => {
  tentangJasaMangementSocmed.goToJasaManagementSocmedWithUrl();
});

Then("User in Tentang Jasa Management Socmed page", () => {
  tentangJasaMangementSocmed.verifyUserinJasaManagementSocmedPage();
});

And("User click paket jasa bu lastri on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.clickJasaBuLastri();
});

Then("User is navigated to whatsapp jasa bu lastri on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.verifyWhatsappJasaBuLastri();
});

And("User click paket jasa bu lastri plus on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.clickJasaBuLastriPlus();
});

Then("User is navigated to whatsapp jasa bu lastri plus on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.verifyWhatsappJasaBuLastriPlus();
});

And("User click paket jasa bu sisil on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.clickJasaBuSisil();
});

Then("User is navigated to whatsapp jasa bu sisil on Tentang Jasa Socmed", () => {
  tentangJasaMangementSocmed.verifyWhatsappJasaBuSisil();
});