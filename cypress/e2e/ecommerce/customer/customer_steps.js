/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I opened ECommerce Home Page',()=>
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

When('I fill the form details',function(dataTable){
    cy.get('input.form-control[name="name"]').type('Test')
    cy.get('input.form-control[name="email"]').type('Test@gmail.com')
    cy.get('input.form-control[type="password"]').type('Shop123')
    cy.get('[type="checkbox"]').check()
    cy.get('select').select('Male')
    cy.get('#inlineRadio2[type="radio"]').check()
    cy.get('input[name="bday"]').type('2000-10-10')
    cy.get('input[type="submit"]').click()
    
})
// Then validate the forms behaviour
Then('validate the forms behaviour',function(){
    cy.get('h4 input.ng-pristine').should('be.visible')
    cy.get('.alert').contains('Success! The Form has been submitted successfully!.')
})
// And select the Shop Page
Then('select the Shop Page',()=>{
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
})