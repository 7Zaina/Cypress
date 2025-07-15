///<reference types="cypress"/>
import LoginPage from "./pages/authPage";

describe('creer un compte et sauthentifier',()=>{
    const loginpage = new LoginPage();
    beforeEach(()=>{
        cy.visit('https://demoblaze.com/');
    }),
  it("se deconnecter du compte utilisateur",()=>{
        // cy.get('#login2').click();
        // cy.get('#loginusername').type(username, { force: true });
        // cy.get('#loginpassword').type(password, { force: true });
        // cy.get('.btn-primary').contains('Log in').click();
        loginpage.login('abcdfgr','2025$');
        cy.contains('Log out').click({force: true});
        cy.get('#login2').should('be.visible');
        cy.get('#login2').should('contain', 'Log in');
 
        });
        // afterEach(function (){ 
        //     const testName = this.currentTest.title;

        // })
    });