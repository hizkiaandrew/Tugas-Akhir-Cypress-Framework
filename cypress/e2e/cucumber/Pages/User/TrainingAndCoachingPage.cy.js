import {
  scrollLoop,
  scrollUntilElementView,
  setNewTabLink,
  clickNewTab
} from "../../Utils/baseClass.cy";
import {
  TRAINING_AND_COACHING_URL,
  CHECKOUT_JASA_URL
} from "../../Utils/variable";
class TrainingAndCoachingPage {
  verifyUserInTrainingCoachingPage() {
    cy.url().should("include", TRAINING_AND_COACHING_URL);
  }

  goToTrainingAndCoachingWithUrl() {
    cy.visit(TRAINING_AND_COACHING_URL);
  }

  clickServiceTrainingAndCoaching(locator) {
    scrollLoop(2000,2);
    scrollUntilElementView("[data-placeholder='Masukkan Deskripsi'] ul");
    let element = cy.get(locator);
    element.click();
  }

  isUserClickSayaMauOrKontakAdminBtn() {
    cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const trainingAndCoaching = new TrainingAndCoachingPage();
export default trainingAndCoaching;
