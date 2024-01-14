Feature: Customer registration

Scenario: Filling the form to shop
    Given I opened ECommerce Home Page
    When I fill the form details
    Then validate the forms behaviour
    And select the Shop Page
