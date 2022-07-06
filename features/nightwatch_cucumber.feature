Feature: Nightwatch Assignment

@test1123
Scenario: Verifying Nightwatch on browserstack site
Given I open browserstack website
When I navigate to documentation
Then I verify names of each of 7 offering under Test your websites
And I verify names of each of 5 offerings under Test your mobile apps
And I verify name of offering under Test your Smart TV apps
When I click on Selenium
And I click on Nightwatch
Then I verify that it has 4 steps in it