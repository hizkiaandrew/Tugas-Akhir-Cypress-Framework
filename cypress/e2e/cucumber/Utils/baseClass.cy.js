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


export const getTextFromButtonElementJasa = (selector) => {
  return new Promise((resolve, reject) => {
    cy.get(selector)
      .each(($el) => {
        if ($el.text() == "Saya Mau") {
          resolve("Saya Mau")
        } else {
          reject($el.text())
        }
      })
  })
}

// export const getTextFromButtonElementJasa = (selector) => {
//   const textValue = [];
//   let result = new Promise((resolve, reject) => {
//     cy.get(selector)
//       .each(($el) => textValue.push($el.text()))
//       .then(() => {
//         cy.log(textValue.join(","));
//         if (textValue.at(0) == "Saya Mau") {
//           resolve("Saya Mau");
//         } else {
//           reject("xxx");
//         }
//       });
//   })
//   return result.then((selector) => {});
//   // let result;
//   cy.get(selector)
//     .each(($el) => textValue.push($el.text()))
//     .then(() => {
//       cy.log(textValue.join(","));
//       if (textValue.at(0) == "Saya Mau") {
//         result = "Saya Mau";
//       } else {
//         result = "xxx";
//       }
//     });
//   // cy.log(textValue.pop());
//   return result;
// };

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
