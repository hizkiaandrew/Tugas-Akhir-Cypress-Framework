import {
  clickElementBySelector,
  customWait,
  goToPageByUrl,
  isContainSameLink,
  scrollLoop,
  scrollThenClick,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import { CHECKOUT_JASA_URL, JASA_KAMI_SOCMED_URL } from "../../Utils/variable";

class PilihanJasaSocialMediaPage {
  goToPilihanJasaSocmedPageWithUrl() {
    goToPageByUrl(JASA_KAMI_SOCMED_URL);
  }

  verifyUserPilihanJasaSocialMediaPage() {
    isContainSameLink(JASA_KAMI_SOCMED_URL);
  }

  clickSosmedTab(locatorTab) {
    scrollUntilElementViewBySelector(
      "div.bg-white.p-0.container-fluid > div.px-lg-0 > div.mb-48px.mx-auto > p.text-medium"
    );
    customWait(500);
    clickElementBySelector(locatorTab);
  }

  clickServiceInPilihanJasaManagementSocmed(locator) {
    scrollLoop(3000, 2);
    customWait(500);
    scrollThenClick(locator)
  }

  isUserClickSayaMauOrKontakAdminBtn(url) {
    isContainSameLink(CHECKOUT_JASA_URL);
  }
}

const pilihanJasaSocialMedia = new PilihanJasaSocialMediaPage();
export default pilihanJasaSocialMedia;
