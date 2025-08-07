Feature: Homepage Functionality
  Test Home functionalities by click on navbar, footer, contents
  
  @Home @Navbar @NavbarLogin @Login
  Scenario: User can access Login Page by click button Daftar/Masuk
    Given User is on Home Page
    And User is not logged in yet
    When User click Login Button
    Then User is navigated to Login Page
  
  @Home @Navbar @NavbarKelas @KelasPremium
  Scenario: User can access Daftar Kelas Premium List by navbar Kelas
    Given User is on Home Page
    And User is not logged in yet
    When User go to Kelas List by navbar
    Then User in Daftar Kelas Premium Page