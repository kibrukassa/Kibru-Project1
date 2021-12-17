Feature: Login

  Scenario: Invalid password, valid username  (negative test)
    Given I am at the login page
    When I type in a username of "sala@gmail.com"
    But I type in a password of "abcde"
    And I click the login button
    Then I should see a message of "Incorrect email and/or password"

  Scenario: Invalid username, valid password  (negative test)
    Given I am at the login page
    When I type in a username of "111@gmail.com"
    But I type in a password of "Pass123"
    And I click the login button
    Then I should see a message of "Incorrect email and/or password"

  Scenario: Invalid username, Invalid password  (negative test)
    Given I am at the login page
    When I type in a username of "111@gmail.com"
    But I type in a password of "alone13"
    And I click the login button
    Then I should see a message of "Incorrect email and/or password"

  Scenario Outline: Successful employee login
    Given I am at the login page
    When I type in a username of <username>
    And I type in a password of <password>
    And I click the login button
    Then I should be redirected to the employee homepage

    Examples: 
      | username          | password      |
      | "john@gmail.com"  | "Password123" |
      | "sala@gmail.com"  | "Pass111"     |
      | "mahi@gmail.com"  | "Pass111"     |
      | "lewi@gmail.com"  | "Pass123"     |
      | "kibru@gmail.com" | "Pass123"     |
      | "mo@gmail.com"    | "Pass111"     |

  Scenario Outline: Successful Finance Manager login
    Given I am at the login page
    When I type in a username of <username>
    And I type in a password of <password>
    And I click the login button
    Then I should be redirected to the Finance Manager homepage

    Examples: 
      | username          | password  |
      | "helen@gmail.com" | "Pass123" |
      | "selam@gmail.com" | "Pass123" |
      | "hana@gmail.com"  | "Pass123" |
