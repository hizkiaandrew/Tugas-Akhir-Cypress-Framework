import { TENTANG_JASA_MANAGEMENT_SOCMED_URL } from "../../Utils/variable";
class TentangJasaManagementSocmedPage {
  goToJasaManagementSocmedWithUrl() {
    cy.visit(TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }

  verifyUserinJasaManagementSocmedPage() {
    cy.url().should("include", TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }
}

const tentangJasaMangementSocmed = new TentangJasaManagementSocmedPage();
export default tentangJasaMangementSocmed;