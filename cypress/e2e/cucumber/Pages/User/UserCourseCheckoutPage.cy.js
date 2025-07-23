import {
  clickElementBySelector,
  customWait,
  goToPageByUrl,
  inputByElement,
  isContainLinkLP,
  isContainSameLink,
  isElementLocated,
  isElementNotLocated,
  scrollThenClick,
  scrollUntilElementViewByElement,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import { COURSE_CHECKOUT_PAYMENT_URL, DAFTAR_KELAS_TERBAIK_URL, KELAS_SAYA_URL, KUPON_KELAS, LEARNING_PAGE_URL, SHOPEE_PREMIUM_CHECKOUT_URL, SHOPEE_PREMIUM_THANKYOU_PAGE_URL, TIKTOK_PREMIUM_CHECKOUT_URL } from "../../Utils/variable";

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

  goToShopeePremiumThankyouPageByUrl() {
    goToPageByUrl(SHOPEE_PREMIUM_THANKYOU_PAGE_URL);
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

    //confirm kupon option
    clickElementBySelector(
      "div[data-testid='coupon-modal'] button[data-testid='use-coupon-btn']"
    );
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

  verifyUserInShopeePremiumThankyouPage() {
    isContainSameLink(SHOPEE_PREMIUM_THANKYOU_PAGE_URL);
  }

  clickCloseThankyouPage() {
    clickElementBySelector("nav[data-testid='thankyou-page-nav'] a.nav-times");
  }

  verifyUserInKelasSayaPage() {
    isContainSameLink(KELAS_SAYA_URL);
  }

  verifyIsCouponAcquired() {
    // return cy.get("div.thankyou-purchase div.coupon").expect();
    return isElementLocated("div.thankyou-purchase div.coupon");
  }

  clickLihatKupon() {
    scrollThenClick("div.thankyou-purchase > div > button.see-coupon-btn");
  }

  verifyUserInProfilePage() {
    isContainSameLink(PROFILE_URL);
  }

  clickLihatSemuaButton() {
    scrollThenClick(
      "div.thankyou-purchase button[data-testid='see-more-button']"
    );
  }

  verifyUserInDaftarKelasTerbaikPage() {
    isContainSameLink(DAFTAR_KELAS_TERBAIK_URL);
  }

  clickLihatKelas() {
    scrollThenClick(
      "div[data-testid='home-list-class'] div.wrapper-card-lesson:nth-child(1) div.card-detail div.actions a.btn-outline-light-blue"
    );
  }

  verfiyUserNavigatedToCourseLP() {
    isContainLinkLP();
  }

  clickCheckoutCourse() {
    scrollThenClick(
      "div[data-testid='home-list-class'] div.wrapper-card-lesson:nth-child(1) div.card-detail div.actions a.btn-orange"
    );
  }

  clickLearningShopeePremium() {
    scrollThenClick(
      "div.thankyou-purchase > div > div.learning-video > div.text-lg-left > button"
    );
  }

  verifyUserInShopeePremiumLearningPage() {
    isContainSameLink(LEARNING_PAGE_URL);
  }
}

const userCourseCheckoutPage = new UserCourseCheckoutPage();
export default userCourseCheckoutPage;
