import {
  scrollLoop,
  scrollUntilElementView,
  setNewTabLink,
  clickNewTab,
} from "../../Utils/baseClass.cy";
import {
  TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_LASTRI_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_LASTRI_PLUS_TIKTOK_SHOP_URL,
  WHATSAPP_JASA_BU_SISIL_TIKTOK_SHOP_URL,
} from "../../Utils/variable";
class TentangJasaManagementTiktokShopPage {
  goToJasaManagementTiktokShopWithUrl() {
    cy.visit(TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL);
  }

  verifyUserinJasaManagementTiktokShopPage() {
    cy.url().should("include", TENTANG_JASA_MANAGEMENT_TIKTOK_SHOP_URL);
  }
}
const tentangJasaManagementTiktokShop =
  new TentangJasaManagementTiktokShopPage();
export default tentangJasaManagementTiktokShop;
