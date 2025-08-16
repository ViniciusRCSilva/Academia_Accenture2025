const RT_TBODY = '.rt-tbody'
const RT_TR = '.rt-tr-group'
const RT_TD = '.rt-td'

Cypress.Commands.add('validarUsuario', (usuarioRef) => {
    cy.get(RT_TBODY).should('be.visible')
    const usuario = Cypress.env(usuarioRef)

    let userFound = false
    cy.get(RT_TR).each(($row) => {
        const cells = $row.find(RT_TD)

        if (
            cells.eq(0).text().includes(usuario.first_name)
            && cells.eq(1).text().includes(usuario.last_name)
            && cells.eq(2).text().includes(usuario.age.toString())
            && cells.eq(3).text().includes(usuario.email)
            && cells.eq(4).text().includes(usuario.salary.toString())
            && cells.eq(5).text().includes(usuario.department)
        ) {
            cy.wrap($row).within(() => {
                cy.get(RT_TD).eq(0).should('contain', usuario.first_name)
                cy.get(RT_TD).eq(1).should('contain', usuario.last_name)
                cy.get(RT_TD).eq(2).should('contain', usuario.age.toString())
                cy.get(RT_TD).eq(3).should('contain', usuario.email)
                cy.get(RT_TD).eq(4).should('contain', usuario.salary.toString())
                cy.get(RT_TD).eq(5).should('contain', usuario.department)
            })
            const userId = cells.eq(6).find('span[id^="edit-record-"]').attr('id').replace('edit-record-', '')
            Cypress.env(usuarioRef, { user_id: userId })
            userFound = true
            return false
        }
    }).then(() => {
        expect(userFound).to.be.true
    })
})

Cypress.Commands.add('validarExclusao', (usuario) => {
    cy.get(RT_TBODY).should('be.visible')

    let userFound = false
    cy.get(RT_TR).each(($row) => {
        const cells = $row.find(RT_TD)

        if (
            cells.eq(0).text().includes(usuario.first_name)
            && cells.eq(1).text().includes(usuario.last_name)
            && cells.eq(2).text().includes(usuario.age.toString())
            && cells.eq(3).text().includes(usuario.email)
            && cells.eq(4).text().includes(usuario.salary.toString())
            && cells.eq(5).text().includes(usuario.department)
        ) {
            userFound = true
            return false
        }
    }).then(() => {
        expect(userFound).to.be.false
    })
})