import {
  clickElementBySelector,
  customWait,
  goToPageByUrl,
  inputByElement,
  isContainSameLink,
  isElementLocated,
  isElementNotLocated,
  scrollThenClick,
  scrollUntilElementViewByElement,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import { COURSE_CHECKOUT_PAYMENT_URL, KUPON_KELAS, SHOPEE_PREMIUM_CHECKOUT_URL, TIKTOK_PREMIUM_CHECKOUT_URL } from "../../Utils/variable";

class UserCourseCheckoutPage {
  goToCourseByUrl(url) {
    goToPageByUrl(url);
  }

  verifyUserInCheckoutPage(url) {
    isContainSameLink(url);
  }

  goToShopePremiumCheckoutByUrl() {
    goToPageByUrl(SHOPEE_PREMIUM_CHECKOUT_URL);
  }

  goToTiktokPremiumCheckoutByUrl() {
    goToPageByUrl(TIKTOK_PREMIUM_CHECKOUT_URL);
  }

  enterGeneralKuponKelasCode() {
    let kuponCodeField = cy.get(
      "div.checkout div.container div [data-testid='coupon-check'] div.coupon-check-form input[data-testid='input-coupon-code']"
    );
    scrollUntilElementViewByElement(kuponCodeField);
    inputByElement(kuponCodeField, KUPON_KELAS);
  }

  clickCheckKuponKelas() {
    let kuponCodeField = cy.get(
      "div.checkout div.container div [data-testid='coupon-check'] div.coupon-check-form input[data-testid='input-coupon-code']"
    );
    scrollUntilElementViewByElement(kuponCodeField);
    clickElementBySelector(
      "div.checkout div.container div [data-testid='coupon-check'] div.coupon-check-form span[data-testid='check-coupon-code']"
    );
  }

  verifyKuponTotalPrice() {
    // Verify Kupon Applied First
    isElementLocated("div.checkout [data-testid='selected-coupon']");

    // Verify Total Price Reduced
    cy.get(
      "div[data-testid='summary-price'] div.container > div > div:nth-child(1) > div:nth-child(1) div:nth-child(2)"
    )
      .invoke("text")
      .as("coursePrice");
    cy.get(
      "div[data-testid='summary-price'] div.container > div > div:nth-child(2) > div:nth-child(2)"
    )
      .invoke("text")
      .as("totalPrice");

    cy.get("@coursePrice").then((coursePrice) => {
      cy.get("@totalPrice").should("not.equal", coursePrice);
    });
  }

  clickPilihKuponKelas() {
    scrollUntilElementViewBySelector(
      "div.checkout div.container div [data-testid='coupon-check'] div.coupon-check-form input[data-testid='input-coupon-code']"
    );
    scrollThenClick(
      "div.checkout div.container div [data-testid='coupon-check'] div[data-testid='btn-kupon']"
    );
  }

  verifyGeneralKuponKelasAvailable() {
    return isElementLocated(
      "[data-testid='coupon-modal'] [data-testid='list-coupon'] [data-testid='general-coupon-section'] [data-testid='checkout-coupon-general'] [data-testid='coupon-card']"
    );
  }

  chooseGeneralKupon() {
    //choose Kupon
    clickElementBySelector(
      "div[data-testid='coupon-modal'] div[data-testid='list-coupon'] div[data-testid='general-coupon-section'] [data-testid='checkout-coupon-general'] [data-testid='coupon-card']:nth-child(1)"
    );

    cy.log("clicked KUPONAUTOMATION");
    //confirm kupon option
    clickElementBySelector(
      "div[data-testid='coupon-modal'] button[data-testid='use-coupon-btn']"
    );
    cy.log("clicked pakai kupon");
  }

  clickResetKuponKelas() {
    scrollThenClick(
      "div.checkout div.container div [data-testid='selected-coupon'] div [data-testid='reset-coupon-btn']"
    );
  }

  verifyKuponTotalPriceNotEqual() {
    // Verify Kupon Applied First
    isElementNotLocated("div.checkout [data-testid='selected-coupon']");

    // Verify Total Price Reduced
    cy.get(
      "div[data-testid='summary-price'] div.container > div > div:nth-child(1) > div:nth-child(1) div:nth-child(2)"
    )
      .invoke("text")
      .as("coursePrice");
    cy.get(
      "div[data-testid='summary-price'] div.container > div > div:nth-child(2) > div:nth-child(2)"
    )
      .invoke("text")
      .as("totalPrice");

    cy.get("@coursePrice").then((coursePrice) => {
      cy.get("@totalPrice").should("equal", coursePrice);
    });
  }

  clickSyaratKetentuanGeneralKuponKelas() {
    scrollThenClick(
      "div[data-testid='coupon-modal'] div[data-testid='list-coupon'] div[data-testid='general-coupon-section'] [data-testid='checkout-coupon-general'] [data-testid='coupon-card']:nth-child(1) [data-testid='coupon-card-terms-condition']"
    );
  }

  verifySyaratKetentuanGeneralKuponKelasVisible() {
    isElementLocated("div.modal [data-testid='coupon-detail-back-icon']");
  }

  clickCheckoutKelas() {
    clickElementBySelector(
      "div[data-testid='summary-price'] div.container > div > button[data-testid='checkout-btn']"
    );
    customWait(2000);
  }

  verifyUserInPaymentCoursePage() {
    isContainSameLink(COURSE_CHECKOUT_PAYMENT_URL);
  }

  verifyXenditPaymentModalShowed() {
    isElementLocated("[data-testid='thankyou-modal-xendit']");
  }
}

const userCourseCheckoutPage = new UserCourseCheckoutPage();
export default userCourseCheckoutPage;
