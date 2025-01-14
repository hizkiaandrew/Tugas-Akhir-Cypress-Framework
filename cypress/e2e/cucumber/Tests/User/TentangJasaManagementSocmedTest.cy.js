/// <reference types="cypress" />
import tentangJasaMangementSocmed from "../../Pages/User/TentangJasaManagementSocmedPage.cy";

When("User go to Tentang Jasa Management Socmed via url", () => {
  tentangJasaMangementSocmed.goToJasassManagementSocmedWithUrl();
});

Then("User in Tentang Jasa Management Socmed page", () => {
  tentangJasaMangementSocmed.verifyUserinJasaManagementSocmedPage();
});