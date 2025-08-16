import { And } from "cypress-cucumber-preprocessor/steps"

And("excluir o cadastro", () => {
    cy.excluirUsuario()
})