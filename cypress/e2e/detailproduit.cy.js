///<reference types="cypress"/>

describe('afficher detail produit',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com');
    }),
     it("sauthentifier",()=>{
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        
});
     it("detail produit Backpack",()=>{
        cy.get('.inventory_item_name ').contains('Sauce Labs Backpack').click();
        cy.get('back-to-products').should('be.visible')
     });
     it("detail produit Backpack",()=>{
        cy.get('.inventory_item_name ').contains('Sauce Labs Bike Light').click();
        cy.get('back-to-products').should('be.visible')
     });
});
