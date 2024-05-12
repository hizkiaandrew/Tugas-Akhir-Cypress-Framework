import { TRAINING_AND_COACHING_URL } from "../../Utils/variable";
class TrainingAndCoachingPage {
  verifyUserInTrainingCoachingPage() {
    cy.url().should("include", TRAINING_AND_COACHING_URL);
  }
}


const trainingAndCoaching = new TrainingAndCoachingPage();
export default trainingAndCoaching;