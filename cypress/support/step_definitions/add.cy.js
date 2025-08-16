import { When, And } from "cypress-cucumber-preprocessor/steps"

And("que o usuário preencha todos os campos obrigatórios com dados válidos", () => {
    cy.preencherCampos()
})

When("o usuário submeter o formulário", () => {
    cy.clicarSubmit()
})