import { clickElementBySelector, customWait, goToPageByUrl, isContainSameLink, scrollLoop, scrollUntilElementViewBySelector } from "../../Utils/baseClass.cy";
import {
  LP_PREMIUM_TIKTOK_BUNDLE_CHECKOUT_URL,
  TIKTOK_PREMIUM_CHECKOUT_URL,
  TIKTOK_PREMIUM_LP_URL,
} from "../../Utils/variable";

class TiktokPremiumLPPage {
  goToTiktokPremiumLPByUrl() {
    goToPageByUrl(TIKTOK_PREMIUM_LP_URL);
  }

  verifyUserInTiktokPremiumLPPage() {
    isContainSameLink(TIKTOK_PREMIUM_LP_URL);
  }

  clickSayaMauTiktokPremiumPlus() {
    scrollLoop(7000, 2);
    customWait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    clickElementBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div:nth-child(4) button"
    );
  }

  verifyUserInCheckoutSuperMentorTiktokBundle() {
    isContainSameLink(LP_PREMIUM_TIKTOK_BUNDLE_CHECKOUT_URL);
  }

  clickSayaMauTiktokPremium() {
    scrollLoop(7000, 2);
    customWait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    clickElementBySelector(
      "#section_price .tiktok-package-grid [data-testid='package-tiktok-premium'] .list-package-header div:nth-child(4) button"
    );
  }

  verifyUserInCheckoutTiktokPremium() {
    isContainSameLink(TIKTOK_PREMIUM_CHECKOUT_URL);
  }

  clickLihatJasaMagementSocialMedia() {
    scrollLoop(8000, 2);
    customWait(2000);
    scrollUntilElementViewBySelector("#section_price .tiktok-package-grid");
    scrollUntilElementViewBySelector(
      "#section_price .tiktok-package-grid [data-testid='tiktok-package-premium-plus'] [data-testid='package-tiktok-premium-plus'] .list-package-header div div.list-package-title"
    );
    clickElementBySelector(
      "#section_price .tiktok-package-grid [data-testid='package-management-social-media'] .list-package-header div:nth-child(4) button"
    );
  }
}

const tiktokPremiumLP = new TiktokPremiumLPPage();
export default tiktokPremiumLP;
