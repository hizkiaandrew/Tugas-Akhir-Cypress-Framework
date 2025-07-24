import {
  customWait,
  goToPageByUrl,
  isContainSameLink,
  scrollLoop,
  scrollThenClick
} from "../../Utils/baseClass.cy";
import { CHECKOUT_JASA_URL, JASA_KAMI_MARKETPLACE_URL } from "../../Utils/variable";

class PilihanJasaMarketplacePage {
  buttonTitle;

  verifyUserPilihanJasaMarketplacePage() {
    isContainSameLink(JASA_KAMI_MARKETPLACE_URL);
  }

  goToPilihanJasaMarketplacePageWithUrl() {
    goToPageByUrl(JASA_KAMI_MARKETPLACE_URL);
  }
  clickService(selector) {
    scrollLoop(3000, 2);
    customWait(500);
    scrollThenClick(selector);
  }
  isUserClickSayaMauOrKontakAdminBtn(url) {
    cy.log(url);
    isContainSameLink(CHECKOUT_JASA_URL);
  }
}

const pilihanJasaMarketplace = new PilihanJasaMarketplacePage();
export default pilihanJasaMarketplace;