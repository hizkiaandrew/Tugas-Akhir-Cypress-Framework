/// <reference types="cypress" />
import { Then, And } from "cypress-cucumber-preprocessor/steps";
import trainingAndCoaching from "../../Pages/User/TrainingAndCoachingPage.cy";

Then("User is navigated to Training Coaching page", () => {
  trainingAndCoaching.verifyUserInTrainingCoachingPage();
});

When("User go to Training and Coaching via url", () => {
  trainingAndCoaching.goToTrainingAndCoachingWithUrl();
});

Then("User in Training and Coaching page", () => {
  trainingAndCoaching.verifyUserInTrainingCoachingPage();
});

When("User click service {string} in Training & Coaching page", (locator) => {
  trainingAndCoaching.clickServiceTrainingAndCoaching(locator);
});

Then("User is navigated to checkout page Training and Coaching", () => {
  trainingAndCoaching.isUserClickSayaMauOrKontakAdminBtn();
});
