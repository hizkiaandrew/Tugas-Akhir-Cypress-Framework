import { clickElementBySelector, goToPageByUrl, isContainSameLink, isElementNotLocated } from "../../Utils/baseClass.cy";
import { JASA_CHECKOUT_PAYMENT_URL, JASA_MANAGEMENT_SHOPEE_CHECKOUT_URL } from "../../Utils/variable";

class UserJasaCheckoutPage {
  goToJasaManagementShopeeCheckoutByUrl() {
    goToPageByUrl(JASA_MANAGEMENT_SHOPEE_CHECKOUT_URL);
  }

  verifyUserOnJasaManagementShopeeCheckoutPage() {
    isContainSameLink(JASA_MANAGEMENT_SHOPEE_CHECKOUT_URL);
  }

  clickAgreementCheckbox() {
    clickElementBySelector(
      "div.modal-content div.content-inform-message label[data-testid='checkbox-customcheckbox-label'] span"
    );
  }

  clickSayaMengertiAgreementBox() {
    clickElementBySelector(
      "div.modal-content div.content-inform-message button[data-testid='btn-saya-mengerti']"
    );
  }

  clickCheckout() {
    clickElementBySelector(
      "div[data-testid='summary-price'] div.container > div > button[data-testid='checkout-btn']"
    );
  }

  verifyUserOnPaymentJasaPage() {
    isContainSameLink(JASA_CHECKOUT_PAYMENT_URL);
  }

  verifyModalAgreementClosed() {
    isElementNotLocated("div.modal-content div.content-inform-message");
  }
}

const userJasaCheckoutPage = new UserJasaCheckoutPage();
export default userJasaCheckoutPage;