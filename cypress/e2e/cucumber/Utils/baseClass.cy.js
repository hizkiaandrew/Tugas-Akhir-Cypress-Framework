/// <reference types="cypress" />

export const scrollLoop = (pixel, counter) => {
  for (let i = 0; i < counter; i++) {
    cy.wait(250);
    cy.scrollTo(0, pixel);
    cy.wait(250);
  }
};

export const scrollThenClick = (selector) => {
  let element = cy.get(selector);
  element.scrollIntoView();
  cy.scrollTo(0, 100);
  element.click();
}



export const getTextElementByElement = (selector) => {
  // let text;
  // element.invoke('text').then(($el) => {
  //   text =  $el.text();
  //   cy.log("test : "+text);
  // });
  // cy.log("test2 : "+text);
  let textValue;
  cy.get(selector).then(($el) => {
    textValue = $el.text();
    // cy.wrap(textValue).as('wrapValue');
  });
  cy.log("ResultText :" + textValue);

  // // cy.log("Title : ", getText);
  return "Test";
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
