import { goToPageByUrl, isContainSameLink, scrollLoop, scrollThenClick, setNewTabLink } from "../../Utils/baseClass.cy";
import {
  SEMUA_JASA_URL,
  WHATSAPP_JASA_EMAIL_MARKETING_URL,
  WHATSAPP_JASA_FOTO_VIDEO_URL,
  WHATSAPP_JASA_KONTAK_ADMIN_URL,
  WHATSAPP_JASA_SEARCH_ENGINE_MARKETING_URL,
  WHATSAPP_JASA_WEBINAR_URL,
} from "../../Utils/variable";

class SemuaJasaPage {
  goToSemuaJasaWithUrl() {
    goToPageByUrl(SEMUA_JASA_URL);
  }

  verifyUserInSemuaJasaPage() {
    isContainSameLink(SEMUA_JASA_URL);
  }

  clickKontakAdminMeaBtn() {
    setNewTabLink();
    cy.get("[data-testid='btn-contact-admin-agencypricelist']").click();
  }

  verifyWhatsappJasaOpenedOnNewTab() {
    cy.url().should("include", WHATSAPP_JASA_KONTAK_ADMIN_URL);
  }

  clickMarketplaceManagementBtn() {
    scrollLoop(5000,1)
    cy.wait(500);
    scrollThenClick(
      "div[data-testid='agencypricelist-marketplace-management'] a[data-testid='btn-agencypricelist-link-marketplace']"
    );
  }

  clickSocialMediaManagementBtn() {
    scrollLoop(5000, 2);
    cy.wait(500);
    scrollThenClick(
      "div[data-testid='agencypricelist-socmed'] a[data-testid='btn-agencypricelist-link-socmed']"
    );
  }

  clickSearchEngineMarketingManagementBtn() {
    scrollLoop(5000, 3);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "div[data-testid='agencypricelist-search-engine'] button[data-testid='btn-agencypricelist-email-marketing-management']"
    );
  }

  verifyWhatsappJasaSearchEngineMarketingManagement() {
    cy.url().should("include", WHATSAPP_JASA_SEARCH_ENGINE_MARKETING_URL);
  }

  clickEmailMarketingManagementBtn() {
    scrollLoop(5000, 4);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "div[data-testid='agencypricelist-email-marketing-management'] button[data-testid='btn-agencypricelist-email-marketing-management']"
    );
  }

  verifyWhatsappEmailMarketing() {
    cy.url().should("include", WHATSAPP_JASA_EMAIL_MARKETING_URL);
  }

  clickBtnFotografiDanVideoProduk() {
    scrollLoop(5000, 5);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "div[data-testid='agencypricelist-photo-video-product'] button[data-testid='btn-agencypricelist-photo-video-product']"
    );
  }

  verifyWhatsappFotografiDanVideoProduk() {
    cy.url().should("include", WHATSAPP_JASA_FOTO_VIDEO_URL);
  }

  clickBtnWebinar() {
    scrollLoop(5000, 6);
    cy.wait(500);
    setNewTabLink();
    scrollThenClick(
      "div[data-testid='agencypricelist-webinar'] button[data-testid='btn-agencypricelist-webinar']"
    );
  }

  verifyWhatsappWebinar() {
    cy.url().should("include", WHATSAPP_JASA_WEBINAR_URL);
  }

  clickTrainingAndCoaching() {
    scrollLoop(5000, 6);
    cy.wait(500);
    scrollThenClick(
      "div[data-testid='agencypricelist-training-coaching'] a[data-testid='btn-agencypricelist-link-training-coaching']"
    );
  }
}

const semuaJasa = new SemuaJasaPage();
export default semuaJasa;