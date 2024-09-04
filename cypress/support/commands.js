// Comandos Customizados Versão 1
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
//     cy.get('[name="firstName"]').type('Rodolfo');
//     cy.get('[name="lastName"]').type('Evangelino');
//     cy.get('input[type="email"]').type('teste@teste.com.br');
//     cy.get('select[id="product"]').select('Blog');
//     cy.contains('label', 'Elogio').click();
//     cy.get('[name="open-text-area"]')
//     .type('Teste Incial/Cabeçalho. Preenche os Campos Obrigatórios e Envia Formulário');
//     cy.contains('Enviar').click();
// })
// Comandos Customizados Versão 2
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
//     cy.get('[name="firstName"]').type(data.firstName);
//     cy.get('[name="lastName"]').type(data.lastName);
//     cy.get('input[type="email"]').type(data.email);
//     cy.get('[name="open-text-area"]').type(data.text);
//     cy.contains('Enviar').click();
// })
// Comandos Customizados Versão 3
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
  firstName: 'Lucas',
  lastName: 'Fluvêncio',
  email: 'lucasfluvencio@outlook.com',
  text: 'Teste de FileMandatories, com inclsuão a partir de dados defatult'
}) => {
    cy.get('[name="firstName"]').type(data.firstName);
    cy.get('[name="lastName"]').type(data.lastName);
    cy.get('input[type="email"]').type(data.email);
    cy.get('[name="open-text-area"]').type(data.text);
    cy.contains('Enviar').click();
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })