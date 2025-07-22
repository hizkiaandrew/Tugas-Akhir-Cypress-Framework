import {
  scrollLoop,
  scrollThenClick,
  scrollUntilElementViewBySelector
} from "../../Utils/baseClass.cy";
import { CHECKOUT_JASA_URL, JASA_KAMI_SOCMED_URL } from "../../Utils/variable";

class PilihanJasaSocialMediaPage {
  goToPilihanJasaSocmedPageWithUrl() {
    cy.visit(JASA_KAMI_SOCMED_URL);
  }

  verifyUserPilihanJasaSocialMediaPage() {
    cy.url().should("include", JASA_KAMI_SOCMED_URL);
  }

  clickSosmedTab(locatorTab) {
    scrollUntilElementViewBySelector(
      "div.bg-white.p-0.container-fluid > div.px-lg-0 > div.mb-48px.mx-auto > p.text-medium"
    );
    cy.wait(500);
    let element = cy.get(locatorTab);
    element.click();
  }

  clickServiceInPilihanJasaManagementSocmed(locator) {
    scrollLoop(3000, 2);
    cy.wait(500);
    scrollThenClick(locator)
  }

  isUserClickSayaMauOrKontakAdminBtn(url) {
    cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const pilihanJasaSocialMedia = new PilihanJasaSocialMediaPage();
export default pilihanJasaSocialMedia;
