import {
  getTextFromButtonElementJasa,
  scrollLoop,
} from "../../Utils/baseClass.cy";
import { JASA_KAMI_MARKETPLACE_URL } from "../../Utils/variable";

class PilihanJasaMarketplacePage {
  buttonTitle = "kosongan"

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
    // this.buttonTitle = getTextFromButtonElementJasa(selector);
    // cy.log("button : " + getTextFromButtonElementJasa(selector));
    getTextFromButtonElementJasa(selector).then((message) => {
      cy.log("button : " + message)
      this.buttonTitle = message
    }).catch((error) => {
      cy.log("button : " + error)
      this.buttonTitle = error
    })
    cy.log("result : " + this.buttonTitle)
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