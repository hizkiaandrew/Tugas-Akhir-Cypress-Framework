Feature: User Jasa Checkout Functionality
  Test User Jasa Functionality Payment like buy jasa services then checkout and all related functionalities
  
  @Jasa @Checkout @CheckoutJasa
  Scenario: User is able to access course checkout page by url
    Given User is already logged in
    And User is on Home Page
    When User go to jasa Management Shopee Checkout Page by url
    Then User is navigated to jasa Management Shopee checkout page

  @Jasa @Checkout @CheckoutJasa
  Scenario: User cannot access Jasa checkout page when user not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Pilihan Jasa Management Marketplace via url
    And User click service "[data-testid='btn-agency-Jasa Management Shopee All-In 50 SKU - 1 Bulan']" in Pilihan Jasa Management Marketplace
    Then User is navigated to Login Page

  @Jasa @Checkout @CheckoutJasa
  Scenario: User cannot access checkout page by url when user not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to jasa Management Shopee Checkout Page by url
    Then User is navigated to Login Page

  @Jasa @Checkout @CheckoutJasa
  Scenario: User able to confirm Jasa confirmation modal box message
    Given User is already logged in
    And User is on Home Page
    When User go to jasa Management Shopee Checkout Page by url
    And User click agreement checkbox checkout Jasa
    And User click button Saya Mengerti checkout Jasa
    Then Modal agreement Jasa is closed

  @Jasa @Checkout @CheckoutJasa
  Scenario: User able to checkout Jasa Service
    Given User is already logged in
    And User is on Home Page
    When User go to jasa Management Shopee Checkout Page by url
    And User click agreement checkbox checkout Jasa
    And User click button Saya Mengerti checkout Jasa
    When User click Checkout Jasa
    When User is navigated to payment jasa page
    And Xendit Payment Method showed  