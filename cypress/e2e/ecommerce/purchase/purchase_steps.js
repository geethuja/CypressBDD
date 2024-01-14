/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I open ECommerce Shop Page',()=>
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
})

When('I add items to Cart',function (){
    let productName = 'iphone'
    cy.get('h4.card-title').each(($e1, index, $list) => {
        if($e1.text().includes(productName)){
            cy.get('button.btn').eq(index).click()
        }
    })
    cy.get('.btn-primary').contains('Checkout ( 1 )').click()
})

When('Validate the total prices',()=>{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount=$el.text()
        var res= amount.split(" ")
        res= res[1].trim()
        sum= Number(sum)+Number(res)
       }).then(function(){
            cy.log(sum)
       })
       cy.get('h3 strong').then(function(element){
            const amount=element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            expect(Number(total)).to.equal(sum)       
       }) 
})

Then('select the country submit and verify succcess',()=>{
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })
})