import { scrollLoop, scrollUntilElementView, setNewTabLink } from "../../Utils/baseClass.cy";
import {
  TENTANG_JASA_MANAGEMENT_SOCMED_URL,
  WHATSAPP_JASA_BU_LASTRI_SOSMED_URL,
} from "../../Utils/variable";
class TentangJasaManagementSocmedPage {
  goToJasaManagementSocmedWithUrl() {
    cy.visit(TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }

  verifyUserinJasaManagementSocmedPage() {
    cy.url().should("include", TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }
<<<<<<< HEAD

  clickJasaBuLastri() {
    scrollLoop(3000, 4);
    scrollUntilElementView(
      "div.lp-management-sosmed > div:nth-child(2) > div:nth-child(1) > div.lazyload-wrapper:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    );
    scrollUntilElementView(
      "div.lp-management-sosmed div.lazyload-wrapper div[data-testid='socmed-package'] div.slick-slide:nth-child(1) div[data-testid='service-package-list'] div.text-red"
    );
    setNewTabLink();
    cy.get("[data-testid='btn-agency-BU LASTRI']").click();
  }

  isWhatsappBuLastriSameLink() {
    setNewTabLink();
    cy.url().should("include", WHATSAPP_JASA_BU_LASTRI_SOSMED_URL);
  }
}
=======
}

>>>>>>> fb616da2cc37e5175df9814103706dca3b96f825
const tentangJasaMangementSocmed = new TentangJasaManagementSocmedPage();
export default tentangJasaMangementSocmed;