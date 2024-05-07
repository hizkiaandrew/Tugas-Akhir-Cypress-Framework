import { SEMUA_JASA_URL } from "../../Utils/variable";
import { URL_WHATSAPP_JASA_KONTAK_ADMIN } from "../../Utils/variable";

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
    // cy.window().then(win => {
    //     cy.stub(win, "open")
    //     .callsFake((url, target) => {
    //         expect(target).to.be.undefined;
    //         // call the original `win.open` method
    //         // but pass the `_self` argument
    //         return win.open.wrappedMethod.call(win, url, "_self");
    //     })
    //     .as("open");
    //     })
    // cy.url().should("include", URL_WHATSAPP_JASA_KONTAK_ADMIN);
  //  window.location.replace(URL_WHATSAPP_JASA_KONTAK_ADMIN);
  //   cy.url().should("include", "whatsapp");
    // cy.visit("https://staging.komunitasmea.com/jasa-kami");
    // cy.window().then(win => {
    //   cy.stub(win, "open", (url) => {
    //     win.location.href = URL_WHATSAPP_JASA_KONTAK_ADMIN;
    //   }).as("popup");
    // });
    // cy.get("[data-testid='btn-contact-admin-agencypricelist']").click();
    // cy.url().should("include", "whatsapp");
    // cy.get("h1").should("have.text", "Welcome to the-internet");
  }
}

const semuaJasa = new SemuaJasaPage();
export default semuaJasa;