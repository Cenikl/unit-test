describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('children').click();
    cy.url().should('contains', 'traversal');
  })
})