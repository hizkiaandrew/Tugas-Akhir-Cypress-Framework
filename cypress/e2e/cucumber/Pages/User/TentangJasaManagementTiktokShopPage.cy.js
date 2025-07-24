import {
  clickNewTab,
  goToPageByUrl,
  isContainSameLink,
  scrollLoop
} from "../../Utils/baseClass.cy";
import {
  TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_LASTRI_PLUS_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_LASTRI_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_SISIL_TIKTOK_SHOP_URL,
} from "../../Utils/variable";
class TentangJasaManagementTiktokShopPage {
  goToJasaManagementTiktokShopWithUrl() {
    goToPageByUrl(TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL);
  }

  verifyUserinJasaManagementTiktokShopPage() {
    isContainSameLink(TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL);
  }

  clickJasaBuLastri() {
    scrollLoop(10000, 2);
    clickNewTab("[data-testid='btn-agency-BU LASTRI']");
  }

  verifyWhatsappJasaBuLastri() {
    isContainSameLink(WHATSAPP_JASA_BU_LASTRI_TIKTOK_SHOP_URL);
  }

  clickJasaBuLastriPlus() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='btn-agency-BU LASTRI%2B']"
    );
  }

  verifyWhatsappJasaBuLastriPlus() {
    isContainSameLink(WHATSAPP_JASA_BU_LASTRI_PLUS_TIKTOK_SHOP_URL);
  }

  clickJasaBuSisil() {
    scrollLoop(10000, 2);
    clickNewTab(
      "[data-testid='btn-agency-BU SISIL']"
    );
  }

  verifyWhatsappJasaBuSisil() {
    isContainSameLink(WHATSAPP_JASA_BU_SISIL_TIKTOK_SHOP_URL);
  }
}
const tentangJasaManagementTiktokShop =
  new TentangJasaManagementTiktokShopPage();
export default tentangJasaManagementTiktokShop;
