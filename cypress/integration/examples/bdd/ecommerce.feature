Feature: End to end Ecommerce validation
  Product Purchase
  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the total prices
    Then Select the country submit and verify thankyou

  @Smoke
  Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
      | name          | gender |
      | Arun          | Male   |
      | Amit          | Male   |
      | Rashmi Pareek | Female |
      | Vidya Purohit | Female |
    Then Validate the form behaviour
    And select the Shop Page
