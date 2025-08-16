const BTN_ADD = '#addNewRecordButton'
const ICON_EDIT = '#edit-record-'
const ICON_DELETE = '#delete-record-'
const RT_TBODY = '.rt-tbody'
const RT_TR = '.rt-tr-group'
const RT_TD = '.rt-td'
const IFRAME = 'iframe'
const AD = '#fixedban, .advertisement, .adsbygoogle'
const NO_ROWS_MESSAGE = '.rt-noData'

Cypress.Commands.add('abrirCadastro', () => {
    cy.get(BTN_ADD).click()
})

Cypress.Commands.add('abrirEdicao', () => {
    cy.get(`${ICON_EDIT}${Cypress.env('user.example').user_id}`).click()
})

Cypress.Commands.add('bloquearAnuncios', () => {
    cy.get(IFRAME).should('exist').invoke('remove')
    cy.get(AD).invoke('remove')
})

Cypress.Commands.add('excluirUsuario', () => {
    cy.get(`${ICON_DELETE}${Cypress.env('user.example').user_id}`).click()
})