const INPUT_FIRST_NAME = '#firstName'
const INPUT_LAST_NAME = '#lastName'
const INPUT_EMAIL = '#userEmail'
const INPUT_AGE = '#age'
const INPUT_SALARY = '#salary'
const INPUT_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'

Cypress.Commands.add('preencherCampos', () => {
    cy.get(INPUT_FIRST_NAME).clear().type(`${Cypress.env('user.example').first_name}`, { log: false })
    cy.get(INPUT_LAST_NAME).clear().type(`${Cypress.env('user.example').last_name}`, { log: false })
    cy.get(INPUT_EMAIL).clear().type(`${Cypress.env('user.example').email}`, { log: false })
    cy.get(INPUT_AGE).clear().type(`${Cypress.env('user.example').age}`)
    cy.get(INPUT_SALARY).clear().type(`${Cypress.env('user.example').salary}`, { log: false })
    cy.get(INPUT_DEPARTMENT).clear().type(`${Cypress.env('user.example').department}`)
})

Cypress.Commands.add('clicarSubmit', () => {
    cy.get(BTN_SUBMIT).click()
})