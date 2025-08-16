import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que o usuário acesse o portal Web Tables", () => {
    cy.visit("/")
    cy.bloquearAnuncios()
})

And("que o usuário abra o formulário de cadastro", () => {
    cy.abrirCadastro()
})

Then("deve validar que os dados aparecem corretamente na tabela", () => {
    cy.validarUsuario('user.example')
})

And("deve validar que as alterações aparecem corretamente na tabela", () => {
    cy.validarUsuario('user.edited')
})

And("deve validar que os dados não aparecem mais na tabela", () => {
    cy.validarExclusao('user.edited')
})