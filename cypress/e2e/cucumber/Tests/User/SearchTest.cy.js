/// <reference types="cypress" />
import { And, Then } from "cypress-cucumber-preprocessor/steps";
import searchPage from "../../Pages/User/SearchPage.cy";

Then("User navigated to search page", () => {
  searchPage.verifyUserInSearchPage();
});

And(
  "On Search Page User click Ambil Kelas button with link lp {string}",
  (courseLinkLP) => {
    searchPage.clickCourse(courseLinkLP);
  }
);

Then("User is navigated to Courses Premium LP {string}", (url) => {
  searchPage.verifyIsCourseLPSameLink(url);
});
