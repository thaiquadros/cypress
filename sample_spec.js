/// <reference types="cypress" />

/*describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  })*/


  describe('My First Test', () => {
    it('preenchendo um form', () => {
      cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
  
      cy.get('.form-group > #user-message').type('Thaiana')

      cy.get('#get-input > .btn').click()

      cy.get('.at-cm-no-button').click() 

      cy.get('#sum1').type('5')

      cy.get('#sum2').type('5')

      cy.get('#gettotal > .btn').click()  
        
    })
})