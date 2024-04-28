Feature: Login Functionality
  Test Login functionalities by access login page and entering credentials
  
  @Login
  Scenario: User is able to access Login page by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Login Page via url
    Then User is navigated to Login Page
  
  @Login
  Scenario Outline: User cannot login with wrong email or password
    Given User is on login page
    When User login by entering email field with value "<email>"
    And User login by entering password field with value "<password>"
    Then User submitted all input field
    But User cannot be logged in
    And Error wrong email or password message showed
    
    Examples:
      | email                       | password  |
      | testemailwrong@email.com    | Hz271100  |
      | testemailresetted@email.com | Hz271115  |

  @Login
  Scenario Outline: User cannot login with wrong email format
    Given User is on login page
    When User login by entering email field with value "<email>"
    And User login by entering password field with value "<password>"
    Then User submitted all input field
    But User cannot be logged in
    And Error email format message showed
    
    Examples:
      | email                       | password  |
      | testemailnonvalid.com       | Hz271100  |
  
  @Login
  Scenario Outline: User can login with inputted credentials
    Given User is on login page
    When User login by entering email field with value "<email>"
    And User login by entering password field with value "<password>"
    Then User submitted all input field
    And User is navigated to home page
    
    Examples:
      | email                     | password  |
      | testcomplete515@gmail.com | Hz271100  |
