beforeEach(() => {
  cy.visit('http://localhost:3000/');
})

describe('First test in cypress', () => {
  it('should write an entry', () => {
    cy.get('#add-todo').type('test');
      cy.get('#add-todo').should('have.value','test');
  })

  it('The entry should be in the Todo-List', () => {
    cy.get('#add-todo').type('test').type('{enter}');
      cy
        .get('.list')
        .should('contains.text','test');
      cy
        .get('#test-0')
        .should('exist');
  })

  it('The entry should be in Done-List', () => {
    cy.get('#add-todo').type('test').type('{enter}');
    cy.get('[type="checkbox"]').check()
      cy
        .get('.list')
        .should('contains.text','test');
      cy
        .get('#test-0')
        .should('not.exist');
  })      

})