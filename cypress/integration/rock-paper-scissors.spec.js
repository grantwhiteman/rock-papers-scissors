describe("rock-paper-scissors", () => {
    it("Shows heading", () => {
        cy.visit('/')
        cy.get('#heading').should('contain', 'Hi, welcome to Rock, Paper, Scissors!')
    })

    it("Welcomes player", () => {
        cy.visit('/')
        cy.get('#name-textbox').type('Grant')
        cy.get('#name-submit').click()
        cy.get('#heading').should('contain', 'Welcome, Grant')
    })

    it("Plays rock paper scissors", () => {
        cy.visit('/')
        cy.get('#name-textbox').type('Grant')
        cy.get('#name-submit').click()
        cy.get('select').select('Paper')
        cy.get('#weapon-submit').click()
        cy.get('#heading').should('contain', 'You threw paper, computer threw')
    })

    it("Lets you play again", () => {
        cy.visit('/')
        cy.get('#name-textbox').type('Grant')
        cy.get('#name-submit').click()
        cy.get('select').select('Paper')
        cy.get('#weapon-submit').click()
        cy.get('#playagain-submit').click()
        cy.get('#heading').should('contain', 'Welcome, Grant')
    })
})