import { clickNewTab, scrollLoop } from "../../Utils/baseClass.cy";
import {
    TENTANG_JASA_MANAGEMENT_SOCMED_URL,
    WHATSAPP_JASA_BU_LASTRI_PLUS_SOSMED_URL,
    WHATSAPP_JASA_BU_LASTRI_SOSMED_URL,
    WHATSAPP_JASA_BU_SISIL_SOSMED_URL,
} from "../../Utils/variable";
class TentangJasaManagementSocmedPage {
  goToJasaManagementSocmedWithUrl() {
    cy.visit(TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }

  verifyUserinJasaManagementSocmedPage() {
    cy.url().should("include", TENTANG_JASA_MANAGEMENT_SOCMED_URL);
  }

  clickJasaBuLastri() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='socmed-package'] > div.wrapper-package-slider button[data-testid='btn-agency-BU LASTRI']"
    );
  }

  verifyWhatsappJasaBuLastri() {
    cy.url().should("include", WHATSAPP_JASA_BU_LASTRI_SOSMED_URL);
  }

  clickJasaBuLastriPlus() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='socmed-package'] > div.wrapper-package-slider button[data-testid='btn-agency-BU LASTRI%2B']"
    );
  }

  verifyWhatsappJasaBuLastriPlus() {
    cy.url().should("include", WHATSAPP_JASA_BU_LASTRI_PLUS_SOSMED_URL);
  }

  clickJasaBuSisil() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='socmed-package'] > div.wrapper-package-slider button[data-testid='btn-agency-BU SISIL']"
    );
  }

  verifyWhatsappJasaBuSisil() {
    cy.url().should("include", WHATSAPP_JASA_BU_SISIL_SOSMED_URL);
  }
}

const tentangJasaMangementSocmed = new TentangJasaManagementSocmedPage();
export default tentangJasaMangementSocmed;