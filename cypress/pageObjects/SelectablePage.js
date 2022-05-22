import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get firstTextButton() {
    return cy.get(".list-group-item-action").contains(/^Cras justo odio/);
  }
  static get secondTextButton() {
    return cy.get(".list-group-item-action").contains(/^Morbi leo risus/);
  }
  static get thirdTextButton() {
    return cy.get(".list-group-item-action").contains(/^Dapibus ac facilisis in/);
  }
  static get fourthTextButton() {
    return cy.get(".list-group-item-action").contains(/^Porta ac consectetur ac/);
  }
  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }
  static get ButtonOne() {
    return cy.get(".list-group-item-action").contains(/^One/);
  }
  static get ButtonTwo() {
    return cy.get(".list-group-item-action").contains(/^Two/);
  }
  static get ButtonThree() {
    return cy.get(".list-group-item-action").contains(/^Three/);
  }
  static get ButtonFour() {
    return cy.get(".list-group-item-action").contains(/^Four/);
  }
  static get ButtonFive() {
    return cy.get(".list-group-item-action").contains(/^Five/);
  }
  static get ButtonSix() {
    return cy.get(".list-group-item-action").contains(/^Six/);
  }
  static get ButtonSeven() {
    return cy.get(".list-group-item-action").contains(/^Seven/);
  }
  static get ButtonEight() {
    return cy.get(".list-group-item-action").contains(/^Eight/);
  }
  static get ButtonNine() {
    return cy.get(".list-group-item-action").contains(/^Nine/);
  }
}
export default SelectablePage;