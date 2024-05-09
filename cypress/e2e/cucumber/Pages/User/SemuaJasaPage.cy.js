import { SEMUA_JASA_URL } from "../../Utils/variable";

class SemuaJasaPage {
  goToSemuaJasaWithUrl() {
    cy.visit(SEMUA_JASA_URL);
  }

  verifyUserInSemuaJasaPage() {
    cy.url().should("eq", SEMUA_JASA_URL);
  }

  clickKontakAdminMeaBtn() {
    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url, target) => {
          expect(target).to.be.undefined;
          // call the original `win.open` method
          // but pass the `_self` argument
          return win.open.wrappedMethod.call(win, url, "_self");
        })
      .as("open");
    });
    cy.get("[data-testid='btn-contact-admin-agencypricelist']").click();
  }

  verifyWhatsappJasaOpenedOnNewTab() {
    cy.url().should("include", "whatsapp");
  }
}

const semuaJasa = new SemuaJasaPage();
export default semuaJasa;