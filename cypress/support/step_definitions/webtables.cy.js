import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que o usuário acesse o portal Web Tables", () => {
    cy.visit("/")
    cy.bloquearAnuncios()
    cy.capturarIdUltimoUsuario()
})

And("que o usuário abra o formulário de cadastro", () => {
    cy.abrirCadastro()
})

And("que o usuário abra o formulário de edição", () => {
    cy.abrirEdicao()
})

Then("deve validar que os dados aparecem corretamente na tabela", () => {
    cy.validarUsuario(Cypress.env('user.example'))
})

And("deve validar que as alterações aparecem corretamente na tabela", () => {
    cy.validarUsuario(Cypress.env('user.edited'))
})

And("deve validar que os dados não aparecem mais na tabela", () => {
    cy.validarExclusao(Cypress.env('user.deleted'))
})