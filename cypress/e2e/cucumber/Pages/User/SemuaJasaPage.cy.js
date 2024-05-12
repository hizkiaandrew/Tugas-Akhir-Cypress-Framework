import { scrollLoop, setNewTabLink } from "../../Utils/baseClass.cy";
import {
  SEMUA_JASA_URL,
  WHATSAPP_JASA_KONTAK_ADMIN_URL,
  WHATSAPP_JASA_SEARCH_ENGINE_MARKETING_URL,
  WHATSAPP_JASA_EMAIL_MARKETING_URL,
  WHATSAPP_JASA_FOTO_VIDEO_URL,
  WHATSAPP_JASA_WEBINAR_URL,
} from "../../Utils/variable";

class SemuaJasaPage {
  goToSemuaJasaWithUrl() {
    cy.visit(SEMUA_JASA_URL);
  }

  verifyUserInSemuaJasaPage() {
    cy.url().should("eq", SEMUA_JASA_URL);
  }

  clickKontakAdminMeaBtn() {
    setNewTabLink();
    cy.get("[data-testid='btn-contact-admin-agencypricelist']").click();
  }

  verifyWhatsappJasaOpenedOnNewTab() {
    cy.url().should("include", WHATSAPP_JASA_KONTAK_ADMIN_URL);
  }

  clickMarketplaceManagementBtn() {
    cy.scrollTo(0, 5000);
    cy.wait(500);
    cy.get(
      "div[data-testid='agencypricelist-marketplace-management'] a[data-testid='btn-agencypricelist-link-marketplace']"
    ).click();
  }

  clickSocialMediaManagementBtn() {
    scrollLoop(5000, 2);
    cy.get(
      "div[data-testid='agencypricelist-socmed'] a[data-testid='btn-agencypricelist-link-socmed']"
    ).click();
  }

  clickSearchEngineMarketingManagementBtn() {
    scrollLoop(5000, 3);
    setNewTabLink();
    cy.get(
      "div[data-testid='agencypricelist-search-engine'] button[data-testid='btn-agencypricelist-email-marketing-management']"
    ).click();
  }

  verifyWhatsappJasaSearchEngineMarketingManagement() {
    cy.url().should("include", WHATSAPP_JASA_SEARCH_ENGINE_MARKETING_URL);
  }

  clickEmailMarketingManagementBtn() {
    scrollLoop(6000, 4);
    setNewTabLink();
    cy.get(
      "div[data-testid='agencypricelist-email-marketing-management'] button[data-testid='btn-agencypricelist-email-marketing-management']"
    ).click();
  }

  verifyWhatsappEmailMarketing() {
    cy.url().should("include", WHATSAPP_JASA_EMAIL_MARKETING_URL);
  }

  clickBtnFotografiDanVideoProduk() {
    scrollLoop(7000, 5);
    setNewTabLink();
    cy.get(
      "div[data-testid='agencypricelist-photo-video-product'] button[data-testid='btn-agencypricelist-photo-video-product']"
    ).click();
  }

  verifyWhatsappFotografiDanVideoProduk() {
    cy.url().should("include", WHATSAPP_JASA_FOTO_VIDEO_URL);
  }

  clickBtnWebinar() {
    scrollLoop(8000, 6);
    setNewTabLink();
    cy.get(
      "div[data-testid='agencypricelist-webinar'] button[data-testid='btn-agencypricelist-webinar']"
    ).click();
  }

  verifyWhatsappWebinar() {
    cy.url().should("include", WHATSAPP_JASA_WEBINAR_URL);
  }

  clickTrainingAndCoaching() {
    scrollLoop(8000, 6);
    cy.get(
      "div[data-testid='agencypricelist-training-coaching'] a[data-testid='btn-agencypricelist-link-training-coaching']"
    ).click();
  }
}

const semuaJasa = new SemuaJasaPage();
export default semuaJasa;