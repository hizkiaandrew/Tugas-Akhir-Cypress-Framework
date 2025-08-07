Feature: Register Functionality
  Test Register functionalities by click login/register button on navbar

@Register
  Scenario: User is able to Access Register Page
    Given User is on login page
    And User is able to click register tab
    Then User can see register form
  
  @Register
  Scenario Outline: User is able to register account with inputted credentials
    Given User is on login page
    And User is on register tab
    When User register by entering username field with value "<username>"
    And User register by entering email field with value "<email>"
    And User register by entering phone number field with value "<phone-number>"
    And User register by entering password field with value "<password>"
    Then User click register button
    And User is navigated to home page to start quick tutorial
    
    Examples:
      | username            | email                       | phone-number     | password |
      | [AUTOMATION] Test01 | automation.test             | 08355555233      | Hz271100 |