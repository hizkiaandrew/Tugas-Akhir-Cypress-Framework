/// <reference types="cypress" />
import { Then, When } from "cypress-cucumber-preprocessor/steps";
import userCourseCheckoutPage from "../../Pages/User/UserCourseCheckoutPage.cy";

var isGeneralCouponAvailable;
var isCouponAcquired;
When(
  "User go to course {string} Checkout Page by url {string}",
  (courseName, url) => {
    userCourseCheckoutPage.goToCourseByUrl(url);
  }
);

Then("User is navigated to checkout page {string}", (url) => {
  userCourseCheckoutPage.verifyUserInCheckoutPage(url);
}); 

When("User go to course Shopee Premium Checkout Page by url", () => {
  userCourseCheckoutPage.goToShopePremiumCheckoutByUrl();
});

And("User enter General Kupon Kelas Code", () => {
  userCourseCheckoutPage.enterGeneralKuponKelasCode();
});

And("User click Check Kupon Kelas", () => {
  userCourseCheckoutPage.clickCheckKuponKelas();
});

Then("Kupon is applied and the Total Price is reduced", () => {
  userCourseCheckoutPage.verifyKuponTotalPrice();
});

When("User click Pilih Kupon Kelas", () => {
  userCourseCheckoutPage.clickPilihKuponKelas();
});

And("User choose General Kupon Kelas", () => {
  if (userCourseCheckoutPage.verifyGeneralKuponKelasAvailable()) {
    isGeneralCouponAvailable = true;
    userCourseCheckoutPage.chooseGeneralKupon();
  } else {
    cy.log("NO General Coupon");
    isGeneralCouponAvailable = false;
  }
});

Then("Kupon General is applied and the Total Price is reduced", () => {
  if (isGeneralCouponAvailable) {
    userCourseCheckoutPage.verifyKuponTotalPrice();
  }
});

And("User click Reset Kupon Kelas", () => {
  userCourseCheckoutPage.clickResetKuponKelas();
});

Then("Kupon is not applied and Total Price returned to normal price", () => {
  userCourseCheckoutPage.verifyKuponTotalPriceNotEqual();
});

And("User click Syarat & Ketentuan on general Kupon Kelas", () => {
  userCourseCheckoutPage.clickSyaratKetentuanGeneralKuponKelas();
});

Then("User can see Syarat & Ketentuan details Kupon Kelas", () => {
  userCourseCheckoutPage.verifySyaratKetentuanGeneralKuponKelasVisible();
});

When("User go to course Tiktok Premium Checkout Page by url", () => {
  userCourseCheckoutPage.goToTiktokPremiumCheckoutByUrl();
});

And("User click Checkout Kelas", () => {
  userCourseCheckoutPage.clickCheckoutKelas();
});

When("User is navigated to payment course page", () => {
  userCourseCheckoutPage.verifyUserInPaymentCoursePage();
});

And("Xendit Payment Method showed", () => { 
  userCourseCheckoutPage.verifyXenditPaymentModalShowed();
});

When("User go to Shopee Premium Thankyou Page by url", () => {
  userCourseCheckoutPage.goToShopeePremiumThankyouPageByUrl();
});

Then("User is navigated to Shopee Premium Thankyou Page", () => {
  userCourseCheckoutPage.verifyUserInShopeePremiumThankyouPage();
});

When("User click Close Icon on top right Thankyou Page", () => {
  userCourseCheckoutPage.clickCloseThankyouPage();
});

Then("User is navigated to Kelas Saya Page", () => {
  userCourseCheckoutPage.verifyUserInKelasSayaPage();
});

When("User click Lihat Kupon on bonus coupon", () => {
  if (userCourseCheckoutPage.verifyIsCouponAcquired()) {
    isCouponAcquired = true;
    userCourseCheckoutPage.clickLihatKupon();
  } else {
    cy.log("NO Coupon Acquired");
    isCouponAcquired = false;
  }
});

Then("User is navigated to Profile page by Lihat Kupon button", () => {
    if (isCouponAcquired) {
      userCourseCheckoutPage.verifyUserInProfilePage();
    }
});

When("User click Lihat Semua button on suggested course", () => {
  userCourseCheckoutPage.clickLihatSemuaButton();
});

Then("User is navigated to Daftar Kelas Terbaik Page", () => {
  userCourseCheckoutPage.verifyUserInDaftarKelasTerbaikPage();
});

When("User click Lihat Kelas on recommended Course card", () => {
  userCourseCheckoutPage.clickLihatKelas();
});

Then("User is navigated to Course LP", () => {
  userCourseCheckoutPage.verfiyUserNavigatedToCourseLP();
});

When("User click Checkout on Shopee Premium card", () => {
  userCourseCheckoutPage.clickCheckoutCourse();
});

When("User click go to Learning Shopee Premium page", () => {
  userCourseCheckoutPage.clickLearningShopeePremium();
});

Then("User is navigated to Shopee Premium Learning Page", () => {
  userCourseCheckoutPage.verifyUserInShopeePremiumLearningPage();
});


