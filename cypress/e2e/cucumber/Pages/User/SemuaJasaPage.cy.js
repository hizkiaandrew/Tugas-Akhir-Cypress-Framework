import { SEMUA_JASA_URL } from "../../Utils/variable";

class SemuaJasaPage {
  goToSemuaJasaWithUrl() {
    cy.visit(SEMUA_JASA_URL);
  }

  verifyUserInSemuaJasaPage() {
    cy.url().should("eq", SEMUA_JASA_URL);
  }
}

const semuaJasa = new SemuaJasaPage();
export default semuaJasa;