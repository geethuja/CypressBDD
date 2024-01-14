Feature: Ecommerce shopping validation 
 Scenario: Ecommerce products delivery
    Given I open ECommerce Shop Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify succcess