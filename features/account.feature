Feature: Account Setup

  Scenario: User registers a new account
    Given I navigate to the registration page
    When I fill in the registration form
    And I submit the form
    Then I should see the account dashboard