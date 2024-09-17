it('Exercício Extra 2 - Testa a Página da Política de Privacidade de forma Independente', () => {
    cy.visit('/src/privacy.html')
    cy.get('#title')
     .should('be.visible')
     .and('have.text', 'CAC TAT - Política de Privacidade')
    cy.contains('p', 'Talking About Testing').should('be.visible')
  })