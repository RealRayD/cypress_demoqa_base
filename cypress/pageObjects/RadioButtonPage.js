import BasePage from "./BasePage";

class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
    }
    static get exampleElement() {
        return cy.get("exampleSelector");
    }
    static get yesButton() {
        return cy.get("#yesRadio");
    }
    static get impressiveButton() {
        return cy.get("");
    }
    static get resultsSection() {
        return cy.get(".text-success");
    }
}
export default RadioButtonPage;