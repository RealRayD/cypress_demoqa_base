import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
    static get url() {
      return "/web-tables";
    }
  
    static get exampleElement() {
      return cy.get("exampleSelector");
    }
    static get addButton() {
        return cy.get("#addNewRecordButton");
    }
    static get firstNameInput() {
        return cy.get("#firstName");
    }
    static get lastNameInput() {
        return cy.get("#lastName");
    }
    static get emailInput() {
        return cy.get("#userEmail");
    }
    static get ageInput() {
        return cy.get("#age");
    }
    static get salaryInput() {
        return cy.get("#salary");
    }
    static get departmentInput() {
        return cy.get("#department");
    }
    static get submitButton() {
        return cy.get("#submit");
    }
}
export default WebTablesPage;