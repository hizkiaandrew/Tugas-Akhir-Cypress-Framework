import { JASA_KAMI_MARKETPLACE_URL } from "../../Utils/variable";

class PilihanJasaMarketplacePage {
  verifyUserPilihanJasaMarketplacePage(){
    cy.url().should("include", JASA_KAMI_MARKETPLACE_URL);
  }
}

const pilihanJasaMarketplace = new PilihanJasaMarketplacePage();
export default pilihanJasaMarketplace;