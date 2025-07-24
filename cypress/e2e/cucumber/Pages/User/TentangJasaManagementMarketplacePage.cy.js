import { clickNewTab, customWait, goToPageByUrl, isContainSameLink, scrollLoop } from "../../Utils/baseClass.cy";
import {
  TENTANG_JASA_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ENCEP_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ODANG_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_ROSIDI_MANAGEMENT_URL,
  WHATSAPP_JASA_PAK_UNTUNG_MANAGEMENT_URL,
} from "../../Utils/variable";
class TentangJasaMangementPage {
  verifyUserinJasaManagementPage() {
    isContainSameLink(TENTANG_JASA_MANAGEMENT_URL);
  }

  goToJasaManagementWithUrl() {
    goToPageByUrl(TENTANG_JASA_MANAGEMENT_URL);
  }

  clickPaketPakEncep() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none button[data-testid='btn-agency-PAK ENCEP']"
    );
  }

  verifyWhatsappJasaPakEncep() {
    customWait(500);
    isContainSameLink(WHATSAPP_JASA_PAK_ENCEP_MANAGEMENT_URL);
  }

  clickPaketPakRosidi() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none button[data-testid='btn-agency-PAK ROSIDI']"
    );
  }

  verifyWhatsappJasaPakRosidi() {
    customWait(500);
    isContainSameLink(WHATSAPP_JASA_PAK_ROSIDI_MANAGEMENT_URL);
  }

  clickPaketPakOdang() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none button[data-testid='btn-agency-PAK ODANG']"
    );
  }

  verifyWhatsappJasaPakOdang() {
    customWait(500);
    isContainSameLink(WHATSAPP_JASA_PAK_ODANG_MANAGEMENT_URL);
  }

  clickPaketPakUntung() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='marketplace-package'] > div.d-lg-flex.d-none button[data-testid='btn-agency-PAK UNTUNG']"
    );
  }

  verifyWhatsappJasaPakUntung() {
    customWait(500);
    isContainSameLink(WHATSAPP_JASA_PAK_UNTUNG_MANAGEMENT_URL);
  }
}

const tentangJasaMangement = new TentangJasaMangementPage();
export default tentangJasaMangement;
