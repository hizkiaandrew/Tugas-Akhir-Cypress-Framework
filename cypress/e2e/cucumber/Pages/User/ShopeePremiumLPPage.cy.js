import {
  scrollLoop,
  scrollUntilElementView
} from "../../Utils/baseClass.cy";
import { LP_PREMIUM_SHOPEE_BUNDLE_CHECKOUT_URL, MARKETPLACE_MASTERY_CHECKOUT_URL, SHOPEE_PREMIUM_CHECKOUT_URL, SHOPEE_PREMIUM_LP_URL } from "../../Utils/variable";

class ShopeePremiumLPPage {
  goToShopeePremiumLPByUrl() {
    cy.visit(SHOPEE_PREMIUM_LP_URL);
  }

  verifyUserInShopeePremiumLPPage() {
    cy.url().should("include", SHOPEE_PREMIUM_LP_URL);
  }

  clickSayaMauMarketplaceMasteryBasic() {
    scrollLoop(7000, 7);
    cy.wait(2000);
    scrollUntilElementView(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementView(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    let buttonCheckoutMarketplace = cy.get(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div:nth-child(4) button"
    );
    buttonCheckoutMarketplace.click();
  }

  verifyUserInCheckoutPageMarketplaceMasteryBasic() {
    cy.url().should("include", MARKETPLACE_MASTERY_CHECKOUT_URL);
  }

  clickSayaMauShopeePremium() {
    scrollLoop(7000, 7);
    cy.wait(2000);
    scrollUntilElementView(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementView(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    let buttonCheckoutShopeePremium = cy.get(
      ".shopee-package-grid [data-testid='shopee-package-premium'] [data-testid='package-shopee-premium'] .list-package-header div:nth-child(4) button"
    );
    buttonCheckoutShopeePremium.click();
  }

  verifyUserInCheckoutPageShopeePremium() {
    cy.url().should("include", SHOPEE_PREMIUM_CHECKOUT_URL);
  }

  clickSayaMauShopeePremiumPlus() {
    scrollLoop(7000, 7);
    cy.wait(2000);
    scrollUntilElementView(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementView(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    let buttonCheckoutShopeePremiumPlus = cy.get(
      ".shopee-package-grid [data-testid='shopee-package-premium-plus'] [data-testid='package-shopee-premium-plus'] .list-package-header div:nth-child(4) button"
    );
    buttonCheckoutShopeePremiumPlus.click();
  }

  verifyUserInCheckoutSuperMentorShopeeBundle() {
    cy.url().should("include", LP_PREMIUM_SHOPEE_BUNDLE_CHECKOUT_URL);
  }

  clickLihatJasaManagementMarketplace() {
    scrollLoop(8000, 7);
    cy.wait(2000);
    scrollUntilElementView("[data-testid='package-management-market-place']");
    scrollUntilElementView(
      "[data-testid='package-management-market-place'] .list-package-header div .list-package-title"
    );
    let buttonLihatJasaManagementMarketplace = cy.get(
      "[data-testid='package-management-market-place'] .list-package-header div:nth-child(4) button"
    );
    buttonLihatJasaManagementMarketplace.click();
  }
}

const shopeePremiumLP = new ShopeePremiumLPPage();
export default shopeePremiumLP;
