describe('Books App ', () => {
  it('Should be logged in', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy
    .contains('Добро пожаловать test@test.com')
    .should('be.visible');
    cy
    .contains('Log out')
    .should('be.visible')
    .and('not.be.disabled');
    })

  it('Should be not logged in', () => {
    cy.visit('/');
    cy.login('авпп', 'test');
    cy
    .get('#mail')
    .then(($el) => {
      return ($el[0] as HTMLInputElement).checkValidity();
    })
    .should('be.false')
  }) 

  it('Should open the main page', () => {
    cy
    .visit('/');
    cy
    .contains('Books list')
   })

   it('Adding a book', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addBook('Сказки', 'Для детей' , 'С. М. Маршак');
    cy
    .contains('Add to favorite')
    .should('be.visible');
   })

   it('Add a book to favorites ', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addBook('Сказки', 'Для детей' , 'С. М. Маршак');
    cy
    .contains('Add to favorite')
    .should('be.visible')
    .click();
    cy
    .contains('Delete from favorite')
    .should('be.visible');
   })

   it('Remove a book to favorites ', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addBook('Сказки', 'Для детей' , 'С. М. Маршак');
    cy
    .contains('Add to favorite')
    .should('be.visible')
    .click();
    cy
    .contains('Delete from favorite')
    .should('be.visible')
    .contains('Delete from favorite')
    .click();
   })
 }) 