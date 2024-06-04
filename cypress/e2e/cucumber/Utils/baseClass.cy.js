/// <reference types="cypress" />

export const scrollLoop = (pixel, counter) => {
  for (let i = 0; i < counter; i++) {
    cy.wait(250);
    cy.scrollTo(0, pixel);
    cy.wait(250);
  }
};

export const scrollThenClick = (selector) => {
  cy.get(selector).scrollIntoView();
  cy.scrollTo(0, 100);
  cy.get(selector).click();
}

export const setNewTabLink = () => {
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
}
