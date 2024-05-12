import { JASA_KAMI_SOCMED_URL } from "../../Utils/variable";

class PilihanJasaSocialMediaPage {
  verifyUserPilihanJasaSocialMediaPage() {
    cy.url().should("include", JASA_KAMI_SOCMED_URL);
  }
}

const pilihanJasaSocialMedia = new PilihanJasaSocialMediaPage();
export default pilihanJasaSocialMedia;