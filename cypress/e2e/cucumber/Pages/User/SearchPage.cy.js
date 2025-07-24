import { clickElementBySelector, customWait, isContainSameLink, scrollUntilElementViewBySelector } from "../../Utils/baseClass.cy";
import { SEARCH_PAGE_URL } from "../../Utils/variable";

class SearchPage {
  verifyUserInSearchPage() {
    isContainSameLink(SEARCH_PAGE_URL);
  }

  clickCourse(courseLinkLP) {
    scrollUntilElementViewBySelector(".container .section-list-course");
    customWait(250);
    clickElementBySelector(".container .section-list-course .wrapper-card-result [data-testid='card-body-lesson'] .card-lesson-content .card-detail .actions [href='" +
        courseLinkLP +
        "']");
  }

  verifyIsCourseLPSameLink(url) {
    isContainSameLink(url);
  }
}

const searchPage = new SearchPage();
export default searchPage;
