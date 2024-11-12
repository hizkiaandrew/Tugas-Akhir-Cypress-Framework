import {
  scrollLoop
} from "../../Utils/baseClass.cy";
import { CHECKOUT_JASA_URL, JASA_KAMI_MARKETPLACE_URL } from "../../Utils/variable";

class PilihanJasaMarketplacePage {
  buttonTitle;

  verifyUserPilihanJasaMarketplacePage() {
    cy.url().should("include", JASA_KAMI_MARKETPLACE_URL);
  }
  goToPilihanJasaMarketplacePageWithUrl() {
    cy.visit(JASA_KAMI_MARKETPLACE_URL);
  }
  clickService(selector) {
    scrollLoop(3000,2); 
    cy.wait(500);
    let element =  cy.get(selector);
    element.scrollIntoView();
    element.click();
  }
  isUserClickSayaMauOrKontakAdminBtn(url) {
    cy.log(url);
    cy.url().should("include", CHECKOUT_JASA_URL);
  }
}

const pilihanJasaMarketplace = new PilihanJasaMarketplacePage();
export default pilihanJasaMarketplace;