class LoginPage {
    elements={
        username:()=>cy.get('#loginusername'),
        password:()=>cy.get('#loginpassword'),
        login:()=>cy.get('#login2')

    }
    login(username,password){
        this.elements.login().click();
        this.elements.username().type(username, { force: true });
        this.elements.password().type(password, { force: true });
        cy.get('.btn-primary').contains('Log in').click()
    }
}
export default LoginPage;