import {
  scrollLoop,
  scrollUntilElementView,
  setNewTabLink,
  clickNewTab,
} from "../../Utils/baseClass.cy";
import { JASA_KAMI_SOCMED_URL, CHECKOUT_JASA_URL } from "../../Utils/variable";

class PilihanJasaSocialMediaPage {
  verifyUserPilihanJasaSocialMediaPage() {
    cy.url().should("include", JASA_KAMI_SOCMED_URL);
  }

  clickSosmedTab(locatorTab) {
    scrollUntilElementView("div.bg-white.p-0.container-fluid > div.px-lg-0 > div.mb-48px.mx-auto > p.text-medium");
    cy.wait(500);
    let element =  cy.get(locatorTab);
    element.click();
  }

  clickServiceInPilihanJasaManagementSocmed(locator) {
    scrollLoop(3000, 2);
    cy.wait(500);
    let element = cy.get(locator);
    element.scrollIntoView();
    element.click();
  }

  isUserClickSayaMauOrKontakAdminBtn(url) {
        cy.log(url);
        cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const pilihanJasaSocialMedia = new PilihanJasaSocialMediaPage();
export default pilihanJasaSocialMedia;
