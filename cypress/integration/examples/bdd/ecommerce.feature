Feature: End to end Ecommerce validation

    Product Purchase

    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify thankyou

