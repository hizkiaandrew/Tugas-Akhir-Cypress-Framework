Feature: Jasa Functionality
  Test Jasa component functionalities Landing Page and checkout

  #### Semua Jasa Kami
  @SemuaJasa @Jasa
  Scenario: User is able to access Semua Jasa page by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    Then User is navigated to Semua Jasa page
  
  @SemuaJasa @Jasa
  Scenario: User is able to click kontak admin MEA
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Kontak admin mea
    Then User is navigated to whatsapp jasa mea
  
  @PilihanJasaMarketplace @SemuaJasa @Jasa
  Scenario: User is able to click marketplace management button
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Marketplace Management
    Then User is navigated to Jasa Management Markeplace
  
  @PilihanJasaSosmed @SemuaJasa @Jasa
  Scenario: User is able to click social media management button
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Social Media Management
    Then User is navigated to Social Media Management page
  
  @SemuaJasa @Jasa
  Scenario: User is able to click search engine marketing management
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Search Engine Marketing Management
    Then User is navigated to Search Engine Marketing Management page
  
  @SemuaJasa @Jasa
  Scenario: User is able to click email marketing management
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Email Marketing Management
    Then User is navigated to whatsapp Email Marketing page
  
  @SemuaJasa @Jasa
  Scenario: User is able to click fotografi dan video produk
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Fotografi dan Video Produk
    Then User is navigated to whatsapp Fotografi and Video Produk
  
  @SemuaJasa @Jasa
  Scenario: User is able to click Webinar
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Webinar
    Then User is navigated to whatsapp Webinar
  
  @Training&Coaching @SemuaJasa @Jasa
  Scenario: User is able to click Training & Coaching
    Given User is on Home Page
    And User is not logged in yet
    When User go to Semua Jasa page via url
    And User click Training and Coaching
    Then User is navigated to Training Coaching page

####  Tentang Jasa Management Marketplace -> /jasa-kami/management-marketplace
  @TentangJasaMarketplace @Jasa
  Scenario: User is able to access Tentang Jasa Management Marketplace by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Marketplace via url
    Then  User in Tentang Jasa Management Marketplace page
  
  @TentangJasaMarketplace @Jasa
  Scenario: User is able to click paket pak encep in Tentang Jasa Management Marketplace page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Marketplace via url
    And User click paket jasa pak encep
    Then User is navigated to whatsapp jasa pak encep
  
  @TentangJasaMarketplace @Jasa
  Scenario: User is able to click paket pak rosidi in Tentang Jasa Management Marketplace page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Marketplace via url
    And User click paket jasa pak rosidi
    Then User is navigated to whatsapp jasa pak rosidi
  
  @TentangJasaMarketplace @Jasa
  Scenario: User is able to click paket pak odang in Tentang Jasa Management Marketplace page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Marketplace via url
    And User click paket jasa pak odang
    Then User is navigated to whatsapp jasa pak odang
  
  @TentangJasaMarketplace @Jasa
  Scenario: User is able to click paket pak untung in Tentang Jasa Management Marketplace page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Marketplace via url
    And User click paket jasa pak untung
    Then User is navigated to whatsapp jasa pak untung

# ####  Pilihan Jasa Management Marketplace -> /jasa-kami/marketplace
  @PilihanJasaMarketplace @Jasa
  Scenario: User is able to access Pilihan Jasa Management by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Pilihan Jasa Management Marketplace via url
    Then User is navigated to Jasa Management Markeplace
  
  @PilihanJasaMarketplace @Jasa
  Scenario Outline: User is able to click some service in Pilihan Jasa Management Marketplace page
    Given User is already logged in
    And User is on Home Page
    When User go to Pilihan Jasa Management Marketplace via url
    And User click service "<Locator>" in Pilihan Jasa Management Marketplace
    Then User is navigated to whatsapp "<URL>" or checkout page Jasa Management Marketplace
    Examples:
      | Locator                                                                                     | URL                                                                                                                                                                          |
      | [data-testid='btn-agency-Jasa Management Shopee All-In 50 SKU - 1 Bulan']                   | https://api.whatsapp.com/send?phone=6281280832339&text=Saya%20mau%20tau%20tentang%20Jasa%20Management%20Shopee%20All-In%2050%20SKU%20-%201%20Bulan                           |
      | [data-testid='btn-agency-Jasa Management Shopee All-In 50 SKU + Live Shopee 15x - 1 Bulan'] | https://api.whatsapp.com/send?phone=6281280832339&text=Saya%20mau%20tau%20tentang%20Jasa%20Management%20Shopee%20All-In%2050%20SKU%20+%20Live%20Shopee%2015x%20-%201%20Bulan |

# #### Tentang Jasa Management Social Media -> /jasa-kami/management-sosmed
  @TentangJasaSosmed @Jasa
  Scenario: User is able to access Tentang jasa Socmed by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Socmed via url
    Then User in Tentang Jasa Management Socmed page
  
  @TentangJasaSosmed @Jasa
  Scenario: User is able to click paket bu lastri in Tentang Jasa Management Socmed page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Socmed via url
    And User click paket jasa bu lastri on Tentang Jasa Socmed
    Then User is navigated to whatsapp jasa bu lastri on Tentang Jasa Socmed
  
  @TentangJasaSosmed @Jasa
  Scenario: User is able to click paket bu lastri plus in Tentang Jasa Management Socmed page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Socmed via url
    And User click paket jasa bu lastri plus on Tentang Jasa Socmed
    Then User is navigated to whatsapp jasa bu lastri plus on Tentang Jasa Socmed
  
  @TentangJasaSosmed @Jasa
  Scenario: User is able to click paket bu sisil in Tentang Jasa Management Socmed page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Management Socmed via url
    And User click paket jasa bu sisil on Tentang Jasa Socmed
    Then User is navigated to whatsapp jasa bu sisil on Tentang Jasa Socmed

    #### Tentang Jasa Management Tiktokshop -> /jasa-kami/tiktok-shop
  @TentangJasaTiktok @Jasa
  Scenario: User is able to access Tentang Jasa Tiktok Shop by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Tiktok Shop via url
    Then  User in Tentang Jasa Tiktok Shop page
  
  @TentangJasaTiktok @Jasa
  Scenario: User is able to click paket bu lastri in Tentang Jasa Tiktok Shop page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Tiktok Shop via url
    And User click paket jasa bu lastri on Tentang Jasa Tiktok Shop
    Then User is navigated to whatsapp jasa bu lastri on Tentang Jasa Tiktok Shop
  
  @TentangJasaTiktok @Jasa
  Scenario: User is able to click paket bu lastri plus in Tentang Jasa Management Socmed page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Tiktok Shop via url
    And User click paket jasa bu lastri plus on Tentang Jasa Tiktok Shop
    Then User is navigated to whatsapp jasa bu lastri plus on Tentang Jasa Tiktok Shop
  
  @TentangJasaTiktok @Jasa
  Scenario: User is able to click paket bu sisil in Tentang Jasa Management Socmed page
    Given User is on Home Page
    And User is not logged in yet
    When User go to Tentang Jasa Tiktok Shop via url
    And User click paket jasa bu sisil on Tentang Jasa Tiktok Shop
    Then User is navigated to whatsapp jasa bu sisil on Tentang Jasa Tiktok Shop

# ## Pilihan Jasa Management Social Media -> /jasa-kami/social-media
  @PilihanJasaSosmed @Jasa
  Scenario: User in able to access Pilihan jasa Socmed by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Pilihan Jasa Management Socmed via url
    Then User is navigated to Social Media Management page
  
   @PilihanJasaSosmed @Jasa
  Scenario Outline: User click some service in Pilihan Jasa Management Social Media page
    Given User is already logged in
    And User is on Home Page
    When User go to Pilihan Jasa Management Socmed via url
    And User in "<locator-tab>" tab
    When User click service "<locator>" in Pilihan Jasa Management Social Media
    Then User is navigated to whatsapp "<URL>" or checkout page Pilihan Jasa Management Social Media
    Examples:
      |locator                                                               | locator-tab                    | URL                                                                                                                                    |
      |[data-testid='btn-agency-Jasa Video Only Tiktok - 15 Video']          | [data-testid='TikTok-frame']   | https://api.whatsapp.com/send?phone=6281280832339&text=Saya%20mau%20tau%20tentang%20Jasa%20Video%20Only%20Tiktok%20-%2015%20Video      |
      |[data-testid='btn-agency-FB/IG Ads Selama 1 Bulan']                   | [data-testid='facebook-frame'] | https://api.whatsapp.com/send?phone=6281280832339&text=Saya%20mau%20tau%20tentang%20FB/IG%20Ads%20Selama%201%20Bulan                   |
      |[data-testid='btn-agency-Jasa Management Instagram Selama 1 Bulan']   | [data-testid='instagram-frame']| https://api.whatsapp.com/send?phone=6281280832339&text=Saya%20mau%20tau%20tentang%20Jasa%20Management%20Instagram%20Selama%201%20Bulan |

# ## Training & Coaching -> /jasa-kami/training-coaching
  
  @Training&Coaching @Jasa
  Scenario: User is able to access Training and Coaching page by url
    Given User is on Home Page
    And User is not logged in yet
    When User go to Training and Coaching via url
    Then User in Training and Coaching page
  
  @Training&Coaching @Jasa
  Scenario Outline: User click Training & Coaching service in Training & Coaching page
    Given User is already logged in
    And User is on Home Page
    When User go to Training and Coaching via url
    And User click service "<locator>" in Training & Coaching page
    Then User is navigated to checkout page Training and Coaching
    Examples:
      |locator                                                                                    |
      |[data-testid='btn-agency-All In Workshop + Training + System CS - Reseller - Admin Online']|