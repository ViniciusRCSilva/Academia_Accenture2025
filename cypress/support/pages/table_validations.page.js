const RT_TBODY = '.rt-tbody'
const RT_TR = '.rt-tr-group'
const RT_TD = '.rt-td'

Cypress.Commands.add('validarUsuario', usuario => {
    cy.get(RT_TBODY).should('be.visible')

    let userFound = false
    cy.get(RT_TR).each(($row, index) => {
        const cells = $row.find(RT_TD)
        const firstName = cells.eq(0).text()

        if (firstName.includes(usuario.first_name)) {
            cy.wrap($row).within(() => {
                cy.get(RT_TD).eq(0).should('contain', usuario.first_name)
                cy.get(RT_TD).eq(1).should('contain', usuario.last_name)
                cy.get(RT_TD).eq(2).should('contain', usuario.age.toString())
                cy.get(RT_TD).eq(3).should('contain', usuario.email)
                cy.get(RT_TD).eq(4).should('contain', usuario.salary.toString())
                cy.get(RT_TD).eq(5).should('contain', usuario.department)
            })
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
        const firstName = cells.eq(0).text()
        const lastName = cells.eq(1).text()

        if (firstName.includes(usuario.first_name) && lastName.includes(usuario.last_name)) {
            userFound = true
            return false
        }
    }).then(() => {
        expect(userFound).to.be.false
    })
})