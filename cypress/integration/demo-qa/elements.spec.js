import ButtonsPage from "../../pageObjects/ButtonsPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import LinksPage from "../../pageObjects/LinksPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import SelectablePage from "../../pageObjects/SelectablePage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      TextBoxPage.fullNameInputField.type("George Junior");
      TextBoxPage.emailInputField.type("randomemail@email.com");
      TextBoxPage.permaAdressInput.type("Random permaadress");
      TextBoxPage.submitButton.click();
      TextBoxPage.paragraphName.should("exist").should("be.visible").should("contain", "George Junior");
    });
    it("Filling in Text Boxes", () => {
      cy.fixture("textBoxData").then((data) => {
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.permaAdressInput.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.paragraphName.should("contain", data.fullName);
        TextBoxPage.paragraphEmail.should("contain", data.email);
        TextBoxPage.paragraphPermanentAddress.should("contain", data.permanentAddress);
      });
    });
  });
});
context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it("Click checkboxes - office", () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.checkBoxTitles.contains("Office").click();
      CheckBoxPage.checkedResults
      .should("contain", "office")
      .should("contain", "public")
      .should("contain", "private")
      .should("contain", "classified")
      .should("contain", "general");
    });

  });
    context("Text box scenarios", () => {
      beforeEach(() => {
        WebTablesPage.visit();
      });
      it("Create user in web table", () => {
        WebTablesPage.addButton.click();
        WebTablesPage.firstNameInput.type("Henry");
        WebTablesPage.lastNameInput.type("Noob");
        WebTablesPage.emailInput.type("rando@va.lv");
        WebTablesPage.ageInput.type("22");
        WebTablesPage.salaryInput.type("2000");
        WebTablesPage.departmentInput.type("sales");
        WebTablesPage.submitButton.click();
      });
    });
    context("Buttons scenarios", () => {
      beforeEach(() => {
        ButtonsPage.visit();
      });
      it("Click buttons with different styles", () => {
        ButtonsPage.doubleClickButton.dblclick();
        ButtonsPage.doubleClickMessage
        .should("be.visible")
        .should("contain", "You have done a double click");
        ButtonsPage.rightClickButton.rightclick();
        ButtonsPage.rightClickMessage
        .should("be.visible")
        .should("contain", "You have done a right click");
        ButtonsPage.dynamicClickButton.click();
      });
    });
    context("Links scenarios", () => {
      beforeEach(() => {
        LinksPage.visit();
      });
      it("API intercepting", () => {
        //cy.intercept("GET", "created", { statuscode: 400});
        LinksPage.createdLink.click();
        LinksPage.linkResponse.should("contain", "201");
      });
    });
    context("Selectable scenarios", () => {
      beforeEach(() => {
        SelectablePage.visit();
      });
      it.only("Select and validate active and inactive buttons", () => {
        SelectablePage.firstTextButton.click();
        SelectablePage.secondTextButton.click();
        SelectablePage.firstTextButton.invoke('attr', 'class').should('equal', 'mt-2 list-group-item active list-group-item-action');
        SelectablePage.secondTextButton.invoke('attr', 'class').should('equal', 'mt-2 list-group-item active list-group-item-action');
        SelectablePage.thirdTextButton.invoke('attr', 'class').should('equal', 'mt-2 list-group-item list-group-item-action');
        SelectablePage.fourthTextButton.invoke('attr', 'class').should('equal', 'mt-2 list-group-item list-group-item-action');
        SelectablePage.gridButton.click();
        SelectablePage.ButtonOne.click();
        SelectablePage.ButtonFour.click();
        SelectablePage.ButtonSix.click();
        SelectablePage.ButtonEight.click();
        SelectablePage.ButtonOne.invoke('attr', 'class').should('equal', 'list-group-item active list-group-item-action');
        SelectablePage.ButtonFour.invoke('attr', 'class').should('equal', 'list-group-item active list-group-item-action');
        SelectablePage.ButtonSix.invoke('attr', 'class').should('equal', 'list-group-item active list-group-item-action');
        SelectablePage.ButtonEight.invoke('attr', 'class').should('equal', 'list-group-item active list-group-item-action');
        SelectablePage.ButtonTwo.invoke('attr', 'class').should('equal', 'list-group-item list-group-item-action');
        SelectablePage.ButtonThree.invoke('attr', 'class').should('equal', 'list-group-item list-group-item-action');
        SelectablePage.ButtonFive.invoke('attr', 'class').should('equal', 'list-group-item list-group-item-action');
        SelectablePage.ButtonSeven.invoke('attr', 'class').should('equal', 'list-group-item list-group-item-action');
        SelectablePage.ButtonNine.invoke('attr', 'class').should('equal', 'list-group-item list-group-item-action');
      });
    });
});
