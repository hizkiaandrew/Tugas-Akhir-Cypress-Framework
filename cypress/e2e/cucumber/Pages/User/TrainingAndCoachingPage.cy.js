import {
  clickElementBySelector,
  goToPageByUrl,
  isContainSameLink,
  scrollLoop,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import {
  CHECKOUT_JASA_URL,
  TRAINING_AND_COACHING_URL
} from "../../Utils/variable";
class TrainingAndCoachingPage {
  verifyUserInTrainingCoachingPage() {
    isContainSameLink(TRAINING_AND_COACHING_URL);
  }

  goToTrainingAndCoachingWithUrl() {
    goToPageByUrl(TRAINING_AND_COACHING_URL);
  }

  clickServiceTrainingAndCoaching(locator) {
    scrollLoop(2000, 2);
    scrollUntilElementViewBySelector("[data-placeholder='Masukkan Deskripsi'] ul");
    clickElementBySelector(locator);
  }

  isUserClickSayaMauOrKontakAdminBtn() {
    isContainSameLink(CHECKOUT_JASA_URL);
  }
}

const trainingAndCoaching = new TrainingAndCoachingPage();
export default trainingAndCoaching;
