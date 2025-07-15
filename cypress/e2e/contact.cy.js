///<reference types="cypress"/>


describe("remplir formulaire contact",function(){
    
    beforeEach(function(){
        cy.visit('https://demoblaze.com/');
        cy.fixture('formulaire').then(formulaire=>{
            this.formulaire=formulaire;
        })

        
    })
    it("inserer les infos dans le formulaire",function(){
    
        cy.get('[data-target="#exampleModal"]').click({force: true});
        cy.get('#recipient-email').type(this.formulaire.ContactEmail,{force: true});
        cy.get('#recipient-name').type(this.formulaire.ContactName,{force: true});
        cy.get('#message-text').type(this.formulaire.Message,{force: true});
        cy.get('.btn-primary').contains('Send message').click({force: true});
        cy.on('windows:alert', (messageEnvoye)=>{
             expect(messageEnvoye).to.equal('Thanks for the message!!');
        });
       
    });
 });
