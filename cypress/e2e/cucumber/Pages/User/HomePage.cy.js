import { clickElementBySelector, customWait, goToPageByUrl, inputBySelector, isContainSameLink } from "../../Utils/baseClass.cy";
import { DAFTAR_KELAS_PREMIUM_URL, HOME_URL } from "../../Utils/variable";
class HomePage {
  goToHomePageByUrl() {
    goToPageByUrl(HOME_URL);
  }

  verifyUserOnHomePage() {
    isContainSameLink(HOME_URL);
  }

  verifyUserStagingCookieID() {
    cy.getCookie("staging-UserID").should("be.null");
  }

  startQuickTutorial() {
    this.skipVerifyAccount();
    this.startQuickTutorial();
  }
  enterTextOnSearchField(courseName) {
    inputBySelector(
      ".container .section-category-and-search .form-input-search form div input[placeholder='Pencarian Kelas dan Event']",
      courseName
    );
  }

  clickSearchOnSearchField() {
    customWait(500);
    clickElementBySelector(
      ".container .section-category-and-search .form-input-search form div div.form-input-search__icon svg"
    );
  }

  clickLoginButton() {
    customWait(500);
    clickElementBySelector(
      "[data-testid='navbar-menu'] [data-testid='navbar-btn-login-register']"
    );
  }

  clickSemuaJasaNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Semua Jasa']"
    );
  }

  clickTentangJasaManagementMarketplaceNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Marketplace']"
    );
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Marketplace'] li:first-child"
    );
  }

  clickPilihanJasaManagementNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Marketplace']"
    );
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Marketplace'] li:nth-child(2)"
    );
  }

  clickTentangJasaSocialMediaNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media']"
    );
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media'] li:first-child"
    );
  }

  clickTentangJasaTiktokShopNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media']"
    );
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media'] li:nth-child(2)"
    );
  }

  clickPilihanJasaSocialMediaNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media']"
    );
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Jasa Management Social Media'] li:nth-child(3)"
    );
  }

  clickTrainingAndCoachingNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Jasa']");
    customWait(500);
    clickElementBySelector(
      "[data-testid='sub-nav-user-Jasa'] [data-testid='sub-menu-Jasa-Training & Coaching']"
    );
  }

  clickKelasNavbar() {
    customWait(500);
    clickElementBySelector("[data-testid='sub-nav-user-Kelas']");
  }

  verifyUserInDaftarKelasPremiumPage() {
    isContainSameLink(DAFTAR_KELAS_PREMIUM_URL);
  }
}
const home = new HomePage();
export default home;
