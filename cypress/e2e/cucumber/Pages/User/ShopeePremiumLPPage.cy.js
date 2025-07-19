import {
  scrollLoop,
  scrollUntilElementView
} from "../../Utils/baseClass.cy";
import { SHOPEE_PREMIUM_LP_URL } from "../../Utils/variable";

class ShopeePremiumLPPage {
  goToShopeePremiumLPByUrl() {
    cy.visit(SHOPEE_PREMIUM_LP_URL);
  }

  verifyUserInShopeePremiumLPPage() {
    cy.url().should("include", SHOPEE_PREMIUM_LP_URL);
  }

  clickSosmedTab(locatorTab) {
    scrollUntilElementView(
      "div.bg-white.p-0.container-fluid > div.px-lg-0 > div.mb-48px.mx-auto > p.text-medium"
    );
    cy.wait(500);
    let element = cy.get(locatorTab);
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
    // cy.log(url);
    cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const shopeePremiumLP = new ShopeePremiumLPPage();
export default shopeePremiumLP;
