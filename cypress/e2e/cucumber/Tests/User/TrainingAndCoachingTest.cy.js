/// <reference types="cypress" />
import { Then, And } from "cypress-cucumber-preprocessor/steps";
import trainingAndCoaching from "../../Pages/User/TrainingAndCoachingPage.cy";

Then("User is navigated to Training Coaching page", () => {
  trainingAndCoaching.verifyUserInTrainingCoachingPage();
});
