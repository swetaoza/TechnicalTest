Feature: Testing different Request on virgin Bingo game site

  Scenario: Check if the student application can be accessed by users
    When User sends a GET request to the list endpoint,they must get back a valid status code
