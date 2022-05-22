import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get doubleClickButton() {
    return cy.get("#doubleClickBtn");
  }
  static get rightClickButton() {
    return cy.get("#rightClickBtn");
  }
  static get doubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }
  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
  //dinamiska poga kurai mainas id, ar regexu panem citu identifikatoru, te - panem pogu
  //kura satur Click me
  static get dynamicClickButton() {
    return cy.get(".btn-primary").contains(/^Click Me/);
  }
}
export default ButtonsPage;