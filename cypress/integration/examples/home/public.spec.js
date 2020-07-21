describe('Home public screen', () => {
  before(() => {
    cy.visit('localhost:3000');
  });

  describe('Header', () => {
    it('should have 3 nav links', () => {
      cy.get('header ul a').should('have.length', 3);
    });
  });
});
