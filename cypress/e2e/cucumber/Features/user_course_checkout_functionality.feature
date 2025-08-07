Feature: User Course Checkout Functionality
  Test User Course Functionality Payment like buy class then checkout and all related functionalities

  @Premium @Checkout @CheckoutCourse
  Scenario Outline: User is able to access course checkout page by url
    Given User is already logged in
    And User is on Home Page
    When User go to course "<course>" Checkout Page by url "<url>"
    Then User is navigated to checkout page "<url>"
    
    Examples:
      | course            | url                                        |
      | Shopee Premium    | https://staging.skilskul.co.id/checkout/1  |
      | Tiktok Premium    | https://staging.skilskul.co.id/checkout/4  |

  @Premium @Checkout @CheckoutCourse
  Scenario Outline: User cannot access checkout page by url when user not logged in
    Given User is on Home Page
    And User is not logged in yet
    When User go to course "<course>" Checkout Page by url "<url>"
    Then User is navigated to Login Page
    
    Examples:
      | course            | url|
      | Shopee Premium    | https://staging.skilskul.co.id/checkout/1  |
      | Tiktok Premium    | https://staging.skilskul.co.id/checkout/4  |

  @Checkout @CheckoutCourse @KuponKelas
  Scenario: User is able to enter General Kupon Kelas Code
    Given User is already logged in
    And User is on Home Page
    When User go to course Shopee Premium Checkout Page by url
    And User enter General Kupon Kelas Code
    And User click Check Kupon Kelas
    Then Kupon is applied and the Total Price is reduced

 @Checkout @CheckoutCourse @KuponKelas
  Scenario: User is able to choose General Kupon Kelas
    Given User is already logged in
    And User is on Home Page
    When User go to course Shopee Premium Checkout Page by url
    When User click Pilih Kupon Kelas
    And User choose General Kupon Kelas
    Then Kupon General is applied and the Total Price is reduced
  
  @Checkout @CheckoutCourse @KuponKelas
  Scenario: User is able to reset Kupon Kelas
    Given User is already logged in
    And User is on Home Page
    When User go to course Shopee Premium Checkout Page by url
    When User enter General Kupon Kelas Code
    And User click Check Kupon Kelas
    Then Kupon is applied and the Total Price is reduced
    And User click Reset Kupon Kelas
    Then Kupon is not applied and Total Price returned to normal price

  @Checkout @CheckoutCourse @KuponKelas
  Scenario: User is able to view General Kupon Terms & Condition
    Given User is already logged in
    And User is on Home Page
    When User go to course Shopee Premium Checkout Page by url
    And User is navigated to Shopee Premium Checkout Page
    When User click Pilih Kupon Kelas
    And User click Syarat & Ketentuan on general Kupon Kelas
    Then User can see Syarat & Ketentuan details Kupon Kelas
  
  @Checkout @CheckoutAutomatic @CheckoutCourse @CheckoutWithVA @KuponKelas
  Scenario: User is able to checkout Course with VA and Kupon Kelas
    Given User is already logged in
    And User is on Home Page
    When User go to course Shopee Premium Checkout Page by url
    And User is navigated to Shopee Premium Checkout Page
    When User click Pilih Kupon Kelas
    And User choose General Kupon Kelas
    And User click Checkout Kelas
    When User is navigated to payment course page
    And Xendit Payment Method showed
  
  @Checkout @CheckoutAutomatic @CheckoutCourse @CheckoutWithQRIS @KuponKelas
  Scenario: User is able to checkout Course with QRIS
    Given User is already logged in
    And User is on Home Page
    When User go to course Tiktok Premium Checkout Page by url
    And User is navigated to Tiktok Premium Checkout Page
    When User click Pilih Kupon Kelas
    And User choose General Kupon Kelas
    And User click Checkout Kelas
    When User is navigated to payment course page
    And Xendit Payment Method showed
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to access Thankyou Page by url
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    Then User is navigated to Shopee Premium Thankyou Page
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to Close Thakyou Page
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    And User is navigated to Shopee Premium Thankyou Page
    When User click Close Icon on top right Thankyou Page
    Then User is navigated to Kelas Saya Page
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to access Daftar Kelas Terbaik by Lihat Semua button
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    And User is navigated to Shopee Premium Thankyou Page
    When User click Lihat Semua button on suggested course
    Then User is navigated to Daftar Kelas Terbaik Page
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to access Course LP by Lihat Kelas button
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    And User is navigated to Shopee Premium Thankyou Page
    When User click Lihat Kelas on recommended Course card
    Then User is navigated to Course LP
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to access Shopee Premium Checkout Page by Checkout button
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    And User is navigated to Shopee Premium Thankyou Page
    When User click Checkout on Shopee Premium card
    Then User is navigated to Shopee Premium Checkout Page
  
  @Checkout @CheckoutCourse @ThankyouPage
  Scenario: User is able to access Shopee Premium Learning Page by Learning button
    Given User is already logged in
    And User is on Home Page
    When User go to Shopee Premium Thankyou Page by url
    And User is navigated to Shopee Premium Thankyou Page
    When User click go to Learning Shopee Premium page
    Then User is navigated to Shopee Premium Learning Page