/// <reference types="cypress" />


export const scrollLoop = (pixel, counter) => {
  for (let i = 0; i < counter; i++) {
    cy.wait(250);
    cy.scrollTo(0, pixel);
    cy.wait(250);
    pixel += pixel;
  }
};

export const scrollThenClick = (selector) => {
  let element = cy.get(selector);
  element.scrollIntoView();
  cy.scrollTo(0, 100);
  element.click();
}

export const scrollUntilElementViewBySelector = (selector) => {
  let element = cy.get(selector);
  element.scrollIntoView();
  cy.scrollTo(0, 100);
}

export const scrollUntilElementViewByElement = (element) => {
  element.scrollIntoView();
  cy.wait(100);
  cy.scrollTo(0, 100);
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

export const clickNewTab = (selector) => {
  cy.wait(500);
  setNewTabLink();
  scrollThenClick(selector);
}

export const clickElementBySelector = (selector) => {
  cy.get(selector).click();
}

export const goToPageByUrl = (url) => {
  cy.visit(url);
}

export const inputByElement = (element, inputText) => {
  element.type(inputText);
}

export const isElementLocated = (selector) => {
  return cy.get(selector).should("be.visible");
}

export const isElementNotLocated = (selector) => {
  return cy.get(selector).should("not.exist");
}

export const isContainSameLink = (actualUrl) => {
  cy.url().should('include', actualUrl);
}

export const customWait = (milliseconds) => {
  cy.wait(milliseconds);
}

export const isContainLinkLP = () => {
  customWait(500);
  cy.url().should("include", "https://staging.skilskul.co.id/");
}