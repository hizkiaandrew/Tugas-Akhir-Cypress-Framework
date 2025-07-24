Feature: Homepage Functionality
  Test Home functionalities by click on navbar, footer, contents
  
  @Home @Navbar @NavbarLogin @Login
  Scenario: User can access Login Page by click button Daftar/Masuk
    Given User is on Home Page
    And User is not logged in yet
    When User click Login Button
    Then User is navigated to Login Page
  
  # @Home @Navbar @NavbarJasa @Jasa @SemuaJasa
  # Scenario: User is able to access Semua Jasa page by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Semua Jasa page by navbar
  #   Then User is navigated to Semua Jasa page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Tentang Jasa Management Marketplace by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Tentang Jasa Management Marketplace by navbar
  #   Then  User in Tentang Jasa Management Marketplace page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Pilihan Jasa Management by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Pilihan Jasa Management Marketplace by navbar
  #   Then  User in Pilihan Jasa Management Marketplace page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Tentang jasa Socmed by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Tentang Jasa Management Socmed by navbar
  #   Then  User in Tentang Jasa Management Socmed page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Tentang Jasa Tiktok Shop by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Tentang Jasa Tiktok Shop by navbar
  #   Then  User in Tentang Jasa Tiktok Shop page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Pilihan jasa Socmed by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Pilihan Jasa Management Socmed by navbar
  #   Then  User in Pilihan Jasa Management Socmed page
  
  # @Home @Navbar @NavbarJasa @Jasa
  # Scenario: User is able to access Training and Coaching page by navbar
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to Training and Coaching by navbar
  #   Then User in Training and Coaching page
  
  @Home @Navbar @NavbarKelas @KelasPremium
  Scenario: User can access Daftar Kelas Premium List by navbar Kelas
    Given User is on Home Page
    And User is not logged in yet
    When User go to Kelas List by navbar
    Then User in Daftar Kelas Premium Page