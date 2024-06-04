import { JASA_KAMI_MARKETPLACE_URL } from "../../Utils/variable";
import {
  scrollLoop,
  scrollThenClick,
  getTextElementByElement,
} from "../../Utils/baseClass.cy";

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
    getTextElementByElement(selector);
    // cy.log("title1 : " + this.buttonTitle);
    // cy.log("title2 : " + getTextElementByElement(element));
    // element.click();
  }
  isUserClickSayaMauOrKontakAdminBtn(url) {
    cy.log(url);
  }
}

const pilihanJasaMarketplace = new PilihanJasaMarketplacePage();
export default pilihanJasaMarketplace;