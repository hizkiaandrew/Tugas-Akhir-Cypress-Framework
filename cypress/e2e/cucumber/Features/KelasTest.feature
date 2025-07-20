Feature: Kelas Functionality
  Test Kelas component functionalities Landing Page and checkout

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

  @ShopeePremiumLP @Premium @PilihanJasaMarketplace
  Scenario: User is able to click Lihat Jasa Management Marketplace Saya Mau by Shopee Premium LP
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium LP by url
    And User click Lihat Jasa on Management Marketplace
    Then User is navigated to Marketplace Management page

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

  # @Premium @Checkout @CheckoutCourse
  # Scenario Outline: User is able to access course checkout page by url
  #   Given User is already logged in
  #   And User is on Home Page
  #   When User go to course "<course>" Checkout Page by url "<url>"
  #   Then User is navigated to checkout page "<url>"
    
  #   Examples:
  #     | course            | url                                        |
  #     | Shopee Premium    | https://staging.skilskul.co.id/checkout/1  |
  #     | Tiktok Premium    | https://staging.skilskul.co.id/checkout/4  |

  # @Premium @Checkout @CheckoutCourse
  # Scenario Outline: User cannot access checkout page by url when user not logged in
  #   Given User is on Home Page
  #   And User is not logged in yet
  #   When User go to course "<course>" Checkout Page by url "<url>"
  #   Then User is navigated to Login Page
    
  #   Examples:
  #     | course            | url|
  #     | Shopee Premium    | https://staging.skilskul.co.id/checkout/1  |
  #     | Tiktok Premium    | https://staging.skilskul.co.id/checkout/4  |


#   @Checkout @CheckoutCourse @KuponKelas
#   Scenario: User is able to enter General Kupon Kelas Code
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Shopee Premium Checkout Page by url
#     And User enter General Kupon Kelas Code
#     And User click Check Kupon Kelas
#     Then Kupon is applied and the Total Price is reduced

#  @Checkout @CheckoutCourse @KuponKelas
#   Scenario: User is able to choose General Kupon Kelas
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Shopee Premium Checkout Page by url
#     When User click Pilih Kupon Kelas
#     And User choose General Kupon Kelas
#     Then Kupon General is applied and the Total Price is reduced
  
#   @Checkout @CheckoutCourse @KuponKelas
#   Scenario: User is able to reset Kupon Kelas
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Shopee Premium Checkout Page by url
#     When User enter General Kupon Kelas Code
#     And User click Check Kupon Kelas
#     Then Kupon is applied and the Total Price is reduced
#     And User click Reset Kupon Kelas
#     Then Kupon is not applied and Total Price returned to normal price

#   @Checkout @CheckoutCourse @KuponKelas
#   Scenario: User is able to view General Kupon Terms & Condition
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Shopee Premium Checkout Page by url
#     And User is navigated to Shopee Premium Checkout Page
#     When User click Pilih Kupon Kelas
#     And User click Syarat & Ketentuan on general Kupon Kelas
#     Then User can see Syarat & Ketentuan details Kupon Kelas
  
#   @Checkout @CheckoutAutomatic @CheckoutCourse @CheckoutWithVA @KuponKelas
#   Scenario: User is able to checkout Course with VA and Kupon Kelas
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Shopee Premium Checkout Page by url
#     And User is navigated to Shopee Premium Checkout Page
#     When User click Pilih Kupon Kelas
#     And User choose General Kupon Kelas
#     And User click Checkout Kelas
#     When User is navigated to payment course page
#     And Xendit Payment Method showed
  
#   @Checkout @CheckoutAutomatic @CheckoutCourse @CheckoutWithQRIS @KuponKelas
#   Scenario: User is able to checkout Course with QRIS
#     Given User is already logged in
#     And User is on Home Page
#     When User go to course Tiktok Premium Checkout Page by url
#     And User is navigated to Tiktok Premium Checkout Page
#     When User click Pilih Kupon Kelas
#     And User choose General Kupon Kelas
#     And User click Checkout Kelas
#     When User is navigated to payment course page
#     And Xendit Payment Method showed
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Thankyou Page by url
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to Close Thakyou Page
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click Close Icon on top right Thankyou Page
#     Then User is navigated to Kelas Saya Page
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Profile Kupon by Lihat Kupon button
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click Lihat Kupon on bonus coupon
#     Then User is navigated to Profile page by Lihat Kupon button
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Daftar Kelas Terbaik by Lihat Semua button
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click Lihat Semua button on suggested course
#     Then User is navigated to Daftar Kelas Terbaik Page
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Course LP by Lihat Kelas button
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click Lihat Kelas on recommended Course card
#     Then User is navigated to Course LP
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Shopee Premium Checkout Page by Checkout button
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click Checkout on Shopee Premium card
#     Then User is navigated to Shopee Premium Checkout Page
  
#   @Checkout @CheckoutCourse @ThankyouPage
#   Scenario: User is able to access Shopee Premium Learning Page by Learning button
#     Given User is already logged in
#     And User is on Home Page
#     When User go to Shopee Premium Thankyou Page by url
#     And User is navigated to Shopee Premium Thankyou Page
#     When User click go to Learning Shopee Premium page
#     Then User is navigated to Shopee Premium Learning Page   