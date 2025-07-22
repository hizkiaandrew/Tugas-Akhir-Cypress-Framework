import {
  clickElementBySelector,
  customWait,
  goToPageByUrl,
  isContainSameLink,
  scrollLoop,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import { LP_PREMIUM_SHOPEE_BUNDLE_CHECKOUT_URL, MARKETPLACE_MASTERY_CHECKOUT_URL, SHOPEE_PREMIUM_CHECKOUT_URL, SHOPEE_PREMIUM_LP_URL } from "../../Utils/variable";

class ShopeePremiumLPPage {
  goToShopeePremiumLPByUrl() {
    goToPageByUrl(SHOPEE_PREMIUM_LP_URL);
  }

  verifyUserInShopeePremiumLPPage() {
    isContainSameLink(SHOPEE_PREMIUM_LP_URL);
  }

  clickSayaMauMarketplaceMasteryBasic() {
    scrollLoop(7000, 2);
    customWait(2500);
    scrollUntilElementViewBySelector(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementViewBySelector(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    clickElementBySelector(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div:nth-child(4) button"
    );
  }

  verifyUserInCheckoutPageMarketplaceMasteryBasic() {
    isContainSameLink(MARKETPLACE_MASTERY_CHECKOUT_URL);
  }

  clickSayaMauShopeePremium() {
    scrollLoop(7000, 2);
    customWait(2500);
    scrollUntilElementViewBySelector(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementViewBySelector(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    clickElementBySelector(
      ".shopee-package-grid [data-testid='shopee-package-premium'] [data-testid='package-shopee-premium'] .list-package-header div:nth-child(4) button"
    );
  }

  verifyUserInCheckoutPageShopeePremium() {
    isContainSameLink(SHOPEE_PREMIUM_CHECKOUT_URL);
  }

  clickSayaMauShopeePremiumPlus() {
    scrollLoop(7000, 2);
    customWait(2500);
    scrollUntilElementViewBySelector(
      "div#section_price div [data-testid='shopee-price']"
    );
    scrollUntilElementViewBySelector(
      ".shopee-package-grid [data-testid='shopee-package-marketplace'] [data-testid='package-market-place-mastery-basic'] .list-package-header div.list-package-title"
    );
    clickElementBySelector(
      ".shopee-package-grid [data-testid='shopee-package-premium-plus'] [data-testid='package-shopee-premium-plus'] .list-package-header div:nth-child(4) button"
    );
  }

  verifyUserInCheckoutSuperMentorShopeeBundle() {
    isContainSameLink(LP_PREMIUM_SHOPEE_BUNDLE_CHECKOUT_URL);
  }

  clickLihatJasaManagementMarketplace() {
    scrollLoop(8000, 2);
    customWait(2000);
    scrollUntilElementViewBySelector("[data-testid='package-management-market-place']");
    scrollUntilElementViewBySelector(
      "[data-testid='package-management-market-place'] .list-package-header div .list-package-title"
    );
    clickElementBySelector(
      "[data-testid='package-management-market-place'] .list-package-header div:nth-child(4) button"
    );
  }
}

const shopeePremiumLP = new ShopeePremiumLPPage();
export default shopeePremiumLP;
