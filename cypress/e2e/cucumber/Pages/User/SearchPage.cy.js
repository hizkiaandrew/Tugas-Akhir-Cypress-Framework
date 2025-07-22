import { scrollUntilElementViewBySelector } from "../../Utils/baseClass.cy";
import { SEARCH_PAGE_URL } from "../../Utils/variable";

class SearchPage {
  verifyUserInSearchPage() {
    cy.url().should("include", SEARCH_PAGE_URL);
  }

  clickCourse(courseLinkLP) {
    scrollUntilElementViewBySelector(".container .section-list-course");
    cy.wait(250);
    let element = cy.get(
      ".container .section-list-course .wrapper-card-result [data-testid='card-body-lesson'] .card-lesson-content .card-detail .actions [href='" +
        courseLinkLP +
        "']"
    );
    element.click();
  }

  verifyIsCourseLPSameLink(url) {
    cy.url().should("include", url);
  }
}

const searchPage = new SearchPage();
export default searchPage;
