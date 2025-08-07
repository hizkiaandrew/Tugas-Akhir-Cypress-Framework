Feature: Premium Landing Page Courses Functionality
  Test All MEA exclusive landing page (shopee, tiktok, tokopedia, fb&ig, free classes)

  @PremiumLPBaseFunctionality @ShopeePremiumLP @Premium
  Scenario: User is able to access Shopee Premium LP by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Shopee Premium LP by url
    Then User is navigated to Shopee Premium LP
  
  @PremiumLPBaseFunctionality @TiktokPremiumLP @Premium
  Scenario: User is able to access Tiktok Premium LP by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tiktok Premium LP by url
    Then User is navigated to Tiktok Premium LP

  @PremiumLPViaHomePageSearch @Premium
    Scenario Outline: User is able to access Courses Premium LP via Home Search
      Given User is on Home Page
      And User is not logged in yet
      When User enter "<course-name>" on home search field
      And User click search on search field
      Then User navigated to search page
      And On Search Page User click Ambil Kelas button with link lp "<course-link-lp>"
      Then User is navigated to Courses Premium LP "<URL>"
      
      Examples:
        |course-name                |course-link-lp            |URL                                                       |
        |Shopee Mastery Premium     |/kelas-shopee             |https://staging.skilskul.co.id/kelas-shopee             |
        |TikTok Premium Business    |/kelas-tiktok             |https://staging.skilskul.co.id/kelas-tiktok             |

  @ShopeePremiumLP @Premium
  Scenario: User is able to click Marketplace Mastery Basic Saya Mau by Shopee Premium LP
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Marketplace Mastery Basic from Shopee Premium LP
    Then User is navigated to checkout page Marketplace Mastery Basic
  
  @ShopeePremiumLP @Premium
  Scenario: User is able to click Shopee Premium Saya Mau
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Shopee Premium
    Then User is navigated to checkout page Shopee Premium
  
  @ShopeePremiumLP @Premium @SuperMentorShopee @Bundle
  Scenario: User is able to click Super Mentor Shopee Saya Mau Bundle
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Shopee Premium Plus
    Then User is navigated to checkout page Super Mentor Shopee Bundle

  @ShopeePremiumLP @Premium @PilihanJasaMarketplace
  Scenario: User is able to click Lihat Jasa Management Marketplace Saya Mau by Shopee Premium LP
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium LP by url
    And User click Lihat Jasa on Management Marketplace
    Then User is navigated to Jasa Management Markeplace
    
  @TiktokPremiumLP @Premium @SuperMentorTiktok @Bundle
  Scenario: User is able to click Tiktok Premium Plus Saya Mau Bundle
    Given User is already logged in
    And User is on Home Page
    When User go to Tiktok Premium LP by url
    And User click Saya Mau on Tiktok Premium Plus
    Then User is navigated to checkout page Super Mentor Tiktok Bundle

  @TiktokPremiumLP @Premium
  Scenario: User is able to click Tiktok Premium Business Saya Mau
    Given User is already logged in
    And User is on Home Page
    When User go to Tiktok Premium LP by url
    And User click Saya Mau on Tiktok Premium
    Then User is navigated to checkout page Tiktok Premium

  @TiktokPremiumLP @Premium @PilihanJasaSosmed
  Scenario: User is able to click Lihat Jasa Management Social Media Saya Mau by Tiktok Premium LP
    Given User is already logged in
    And User is on Home Page
    When User go to Tiktok Premium LP by url
    And User click Lihat Jasa on Management Social Media
    Then User is navigated to Social Media Management page
  
  @ShopeePremiumLP @Premium @CheckoutNotLogin
  Scenario: User is not able to access Shopee Premium Checkout Page when not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Shopee Premium
    Then User is navigated to Login Page
  
  @ShopeePremiumLP @Premium @CheckoutNotLogin
  Scenario: User is not able to access Marketplace Mastery Basic Checkout Page by LP Shopee when not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Marketplace Mastery Basic from Shopee Premium LP
    Then User is navigated to Login Page
  
  @ShopeePremiumLP @Premium @CheckoutNotLogin
  Scenario: User is not able to access Shopee Premium Plus Checkout Page when not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Shopee Premium LP by url
    And User click Saya Mau on Shopee Premium Plus
    Then User is navigated to Login Page

  @TiktokPremiumLP @Premium @CheckoutNotLogin
  Scenario: User is not able to access Tiktok Premium Business Checkout Page when not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tiktok Premium LP by url
    And User click Saya Mau on Tiktok Premium
    Then User is navigated to Login Page
  
  @TiktokPremiumLP @Premium @CheckoutNotLogin
  Scenario: User is not able to access Tiktok Premium Plus Checkout Page when not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tiktok Premium LP by url
    And User click Saya Mau on Tiktok Premium Plus
    Then User is navigated to Login Page
