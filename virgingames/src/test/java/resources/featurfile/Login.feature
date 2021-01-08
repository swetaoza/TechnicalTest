Feature: Functional Testing
  In Order to check Login Functionality Is Working

  I as a user want to check login functionality for invalid username and password

  @smoke
  Scenario: click on Login Tag
    When I am on home page
    And I click on LoginTab
    Then I redirected to Login Page

@smoke
Scenario: I enter Invalid credential
  When I am on home page
  And I click on LoginTab
  And I Enter username "mahadevhar"
  And I Enter Password "swetaoza"
  And I click on LoginButton
  Then I get Error message
