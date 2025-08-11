/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
Cypress.Commands.add('login', (email, password) => {
    cy
    .contains('Log in')
    .click();  
    cy
    .get('#mail')
    .type(email);
     cy
    .get('#pass')
    .type(password);
    cy
    .contains('Submit')
    .click();
})

Cypress.Commands.add('addBook', (title, description, authors) => {
   cy
    .contains('Add new')
    .should('be.visible')
    .click();
    cy
    .get('#title')
    .should('be.visible')
    .type(title);
    cy
    .get('#description')
    .should('be.visible')
    .type(description);
    cy
    .get('#authors')
    .should('be.visible')
    .type(authors);
    // cy
    // .get('#favorite')
    // .should('be.visible')
    // .click();
    cy
    .contains('Submit')
    .click();
    cy
    .contains('Add to favorite', { timeout: 10000 })
    .should('be.visible');
})
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }