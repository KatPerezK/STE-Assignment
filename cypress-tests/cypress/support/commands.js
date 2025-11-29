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

Cypress.Commands.add('login', (email, password) => {
    // Clear and fill Email
    const emailField = cy.get('input[name="email"]');  // Select field by its name
    emailField.clear();                                // Clear email field    
    if (email) emailField.type(email);                 // Fill in email

    // Clear and fill Password
    const passField = cy.get('input[name="password"]'); // Select field by its name
    passField.clear();                                  // Clear password field  
    if (password) passField.type(password);             // Fill in password
    cy.contains('button', 'Login').click();             // Select login button by its text and click
});