import {
    scrollLoop,
    scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import {
    CHECKOUT_JASA_URL,
    TRAINING_AND_COACHING_URL
} from "../../Utils/variable";
class TrainingAndCoachingPage {
  verifyUserInTrainingCoachingPage() {
    cy.url().should("include", TRAINING_AND_COACHING_URL);
  }

  goToTrainingAndCoachingWithUrl() {
    cy.visit(TRAINING_AND_COACHING_URL);
  }

  clickServiceTrainingAndCoaching(locator) {
    scrollLoop(2000, 2);
    scrollUntilElementViewBySelector("[data-placeholder='Masukkan Deskripsi'] ul");
    let element = cy.get(locator);
    element.click();
  }

  isUserClickSayaMauOrKontakAdminBtn() {
    cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const trainingAndCoaching = new TrainingAndCoachingPage();
export default trainingAndCoaching;
