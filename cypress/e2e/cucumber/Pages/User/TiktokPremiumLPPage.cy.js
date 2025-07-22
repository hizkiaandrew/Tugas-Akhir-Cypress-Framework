import { scrollLoop, scrollUntilElementViewBySelector } from "../../Utils/baseClass.cy";
import {
    LP_PREMIUM_TIKTOK_BUNDLE_CHECKOUT_URL,
    TIKTOK_PREMIUM_CHECKOUT_URL,
    TIKTOK_PREMIUM_LP_URL,
} from "../../Utils/variable";

class TiktokPremiumLPPage {
  goToTiktokPremiumLPByUrl() {
    cy.visit(TIKTOK_PREMIUM_LP_URL);
  }

  verifyUserInTiktokPremiumLPPage() {
    cy.url().should("include", TIKTOK_PREMIUM_LP_URL);
  }

  clickSayaMauTiktokPremiumPlus() {
    scrollLoop(7000, 2);
    cy.wait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    let buttonCheckoutTiktokPremiumPlus = cy.get(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div:nth-child(4) button"
    );
    buttonCheckoutTiktokPremiumPlus.click();
  }

  verifyUserInCheckoutSuperMentorTiktokBundle() {
    cy.url().should("include", LP_PREMIUM_TIKTOK_BUNDLE_CHECKOUT_URL);
  }

  clickSayaMauTiktokPremium() {
    scrollLoop(7000, 2);
    cy.wait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    let buttonCheckoutTiktokPremium = cy.get(
      "#section_price .tiktok-package-grid [data-testid='package-tiktok-premium'] .list-package-header div:nth-child(4) button"
    );
    buttonCheckoutTiktokPremium.click();
  }

  verifyUserInCheckoutTiktokPremium() {
    cy.url().should("include", TIKTOK_PREMIUM_CHECKOUT_URL);
  }

  clickLihatJasaMagementSocialMedia() {
    scrollLoop(8000, 2);
    cy.wait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    let buttonLihatJasaManagementSosmed = cy.get(
      "#section_price .tiktok-package-grid [data-testid='package-management-social-media'] .list-package-header div:nth-child(4) button"
    );
    buttonLihatJasaManagementSosmed.click();
  }
}

const tiktokPremiumLP = new TiktokPremiumLPPage();
export default tiktokPremiumLP;
