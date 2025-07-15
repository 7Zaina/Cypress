///<reference types="cypress"/>


describe('creer un compte et sauthentifier',()=>{
    const username = `Demo_${Date.now()}` 
    const password = 'password123'
    beforeEach(()=>{
        cy.visit('https://demoblaze.com/');
    }),
    it('creation compte utilisateur', { tags: '@smoke' }, ()=>{
        cy.intercept('OPTIONS','**/signup').as('compteUser');
        cy.get('#signin2').click();
        cy.get('#sign-username').type(username,{force: true});
        cy.get('#sign-password').type(password, {force: true});
        cy.get('.btn-primary').contains('Sign up').click();

        cy.on('windows:alert', (validerAvecSucces)=>{
             expect(validerAvecSucces).to.equal('Sign up successful.');
        });
        cy.wait("@compteUser");
        
    });
     it("se connecter au compte utilisateur",()=>{
        cy.intercept('POST', '**/login').as('loginRequest')
        cy.get('#login2').click();
        cy.get('#loginusername').type(username,{force: true});
        cy.get('#loginpassword').type(password, {force: true});
        cy.get('.btn-primary').contains('Log in').click();
        cy.wait('@loginRequest');
        cy.contains(`Welcome ${username}`).should("be.visible");
        });

      
   });