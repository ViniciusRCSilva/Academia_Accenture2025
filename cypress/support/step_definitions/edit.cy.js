import { And } from "cypress-cucumber-preprocessor/steps"

And("editar o cadastro com novos dados válidos", () => {
    cy.abrirEdicao()
    cy.editarUsuario()
})
