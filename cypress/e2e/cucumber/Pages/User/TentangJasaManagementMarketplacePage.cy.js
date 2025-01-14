import { scrollLoop, scrollThenClick, setNewTabLink } from "../../Utils/baseClass.cy";
import {
  TENTANG_JASA_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ENCEP_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ODANG_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ROSIDI_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_UNTUNG_MANAGEMENT_URL,
} from "../../Utils/variable";
class TentangJasaMangementPage {
  verifyUserinJasaManagementPage() {
    cy.url().should("include", TENTANG_JASA_MANAGEMENT_URL);
  }

  goToJasaManagementWithUrl() {
    cy.visit(TENTANG_JASA_MANAGEMENT_URL);
  }

  clickPaketPakEncep() {
    scrollLoop(10000, 2);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick("[data-testid='marketplace-package'] > div.d-lg-flex.d-none [data-testid='btn-agency-PAK ENCEP']");
  }

  verifyWhatsappJasaPakEncep() {
    cy.url().should("include", WHATSAPP_JASA_PAK_ENCEP_MANAGEMENT_URL);
  }

  clickPaketPakRosidi() {
    scrollLoop(10000, 2);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none [data-testid='btn-agency-PAK ROSIDI']"
    );
  }

  verifyWhatsappJasaPakRosidi() {
    cy.url().should("include", WHATSAPP_JASA_PAK_ROSIDI_MANAGEMENT_URL);
  }

  clickPaketPakOdang() {
    scrollLoop(10000, 2);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none [data-testid='btn-agency-PAK ODANG']"
    );
  }

  verifyWhatsappJasaPakOdang() {
    cy.url().should("include", WHATSAPP_JASA_PAK_ODANG_MANAGEMENT_URL);
  }

  clickPaketPakUntung() {
    scrollLoop(10000, 2);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none [data-testid='btn-agency-PAK UNTUNG']"
    );
  }

  verifyWhatsappJasaPakUntung() {
    cy.url().should("include", WHATSAPP_JASA_PAK_UNTUNG_MANAGEMENT_URL);
  }
}

const tentangJasaMangement = new TentangJasaMangementPage();
export default tentangJasaMangement;
