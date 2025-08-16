const BTN_ADD = '#addNewRecordButton'
const ICON_DELETE = '#delete-record-'
const ICON_EDIT = '#edit-record-'
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
    cy.get(`${ICON_EDIT}${Cypress.env('user.edited').item_id}`).click()
})

Cypress.Commands.add('bloquearAnuncios', () => {
    cy.get(IFRAME).should('exist').invoke('remove')
    cy.get(AD).invoke('remove')
})

Cypress.Commands.add('capturarIdUltimoUsuario', () => {
    cy.get(RT_TBODY).should('be.visible')

    let maxId = 3

    cy.get(RT_TR).then($rows => {
        if ($rows.find('[id^="delete-record-"]').length === 0) {
            cy.log('Nenhum registro encontrado na tabela. Usando ID padrão 3.')
        } else {
            cy.get('[id^="delete-record-"]').each($button => {
                const buttonId = $button.attr('id')
                const idMatch = buttonId.match(`delete-record-${maxId}`)

                // Verifica se o ID encontrado é maior que o máximo atual
                if (idMatch && idMatch[1]) {
                    const id = parseInt(idMatch[1])
                    // Atualiza o máximo ID se necessário
                    if (id > maxId) {
                        maxId = id
                    }
                }
            })
        }
    }).then(() => {
        cy.log(`Último ID encontrado: ${maxId}, usando ${maxId + 1} para novos registros`)

        const userExample = Cypress.env('user.example')
        const userEdited = Cypress.env('user.edited')
        const userDeleted = Cypress.env('user.deleted')

        userExample.item_id = maxId + 1
        userEdited.item_id = maxId + 1
        userDeleted.item_id = maxId + 1

        Cypress.env('user.example', userExample)
        Cypress.env('user.edited', userEdited)
        Cypress.env('user.deleted', userDeleted)
    })
})

Cypress.Commands.add('excluirUsuario', () => {
    const rt_tr_id = Cypress.env('user.edited').item_id - 1

    // Salva os dados do usuário deletado para validação
    cy.get(RT_TR).eq(rt_tr_id).within(() => {
        const user = {}
        cy.get(RT_TD).eq(0).invoke('text').then(text => user.first_name = text.trim())
        cy.get(RT_TD).eq(1).invoke('text').then(text => user.last_name = text.trim())
        cy.get(RT_TD).eq(2).invoke('text').then(text => user.age = text.trim())
        cy.get(RT_TD).eq(3).invoke('text').then(text => user.email = text.trim())
        cy.get(RT_TD).eq(4).invoke('text').then(text => user.salary = text.trim())
        cy.get(RT_TD).eq(5).invoke('text').then(text => user.department = text.trim())

        cy.wrap(user).as('deletedUser')
        Cypress.env('user.deleted', user)
    })

    cy.get(`${ICON_DELETE}${Cypress.env('user.deleted').item_id}`).click()
})