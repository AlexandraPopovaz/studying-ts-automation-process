describe('first test', (

) => {
    it('sign in', () => {
        cy.visit('http://automationpractice.com/index.php'
        );
        cy.title(
            
        ).should('contain', 'My Store')
    })
})