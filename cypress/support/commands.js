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
Cypress.Commands.add("createUser", (user) => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user",
    body: {
      id: 1,
      username: "string",
      firstName: "string",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 1,
    },
  }).then((resp) => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      headers: {
        Authorization: "Wowfun" + resp.body.token,
      },
      body: user,
    });
  });
});
