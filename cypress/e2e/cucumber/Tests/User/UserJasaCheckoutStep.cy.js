/// <reference types="cypress" />
import { When } from "cypress-cucumber-preprocessor/steps";
import userJasaCheckoutPage from "../../Pages/User/UserJasaCheckoutPage.cy";

When("User go to jasa Management Shopee Checkout Page by url", () => {
  userJasaCheckoutPage.goToJasaManagementShopeeCheckoutByUrl();
});

Then("User is navigated to jasa Management Shopee checkout page", () => {
  userJasaCheckoutPage.verifyUserOnJasaManagementShopeeCheckoutPage();
});

And("User click agreement checkbox checkout Jasa", () => {
  userJasaCheckoutPage.clickAgreementCheckbox();
});

And("User click button Saya Mengerti checkout Jasa", () => {
  userJasaCheckoutPage.clickSayaMengertiAgreementBox();
});

Then("Modal agreement Jasa is closed", () => {
  userJasaCheckoutPage.verifyModalAgreementClosed();
});

When("User click Checkout Jasa", () => {
  userJasaCheckoutPage.clickCheckout();
});

When("User is navigated to payment jasa page", () => {
  userJasaCheckoutPage.verifyUserOnPaymentJasaPage();
});