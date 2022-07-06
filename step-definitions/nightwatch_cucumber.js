const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given('I open browserstack website', async () => {
  await client.windowMaximize()
  await client.url('https://www.browserstack.com/');
});

When('I navigate to documentation', async () => {
  await client.useXpath().click('//span[contains(text(),"Developers")]')
  await client.useXpath().click('//ul[@id="developers-menu-dropdown"]//*[@title="Documentation"]')
});

Then('I verify names of each of {int} offering under Test your websites', async int => {
  const websiteTestProducts = ["Selenium", "Cypress", "Playwright", "Puppeteer", "JS Testing API", "Percy", "Live"]
  await client.elements('xpath', '//h2[contains(text(),"Test your websites")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
    els = result.value
    var i = 0
    els.forEach(function(el){
      let elementID = el[Object.keys(el)[0]]
       client.elementIdText(elementID, function(text) {
         client.assert.equal(text.value, websiteTestProducts[i])
          i++;
              });
        });
  });
});

Then('I verify names of each of {int} offerings under Test your mobile apps', async int => {
  const mobileTestProducts = ["Appium", "Espresso", "XCUITest", "EarlGrey", "App Live"]
  await client.elements('xpath', '//h2[contains(text(),"Test your mobile apps")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
    els = result.value
    var i = 0
    els.forEach(function(el){
      let elementID = el[Object.keys(el)[0]]
       client.elementIdText(elementID, function(text) {
         client.assert.equal(text.value, mobileTestProducts[i])
          i++;
              });
        });
  });
});

Then('I verify name of offering under Test your Smart TV apps', async () => {
  const smartTVTestProducts = ["Appium"]
  await client.elements('xpath', '//h2[contains(text(),"Test your Smart TV apps")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
    els = result.value
    var i = 0
    els.forEach(function(el){
      let elementID = el[Object.keys(el)[0]]
       client.elementIdText(elementID, function(text) {
         client.assert.equal(text.value, smartTVTestProducts[i])
          i++;
              });
        });
  });
});

When('I click on Selenium', async () => {
  await client.useXpath().click('//div[@class="product-container--content"]//*[@title="Selenium"]')
});

When('I click on Nightwatch', async () => {
  if(client.isVisible('xpath', '//a[contains(text(), "Got it")]')){
    client.useXpath().click('//a[contains(text(), "Got it")]')
  }
  await client.useXpath().click('//a[text()="Nightwatch"]')
});

Then('I verify that it has {int} steps in it', async int => {
  await client.elements('xpath', '//h2[@id="prerequisites"]//preceding-sibling::ol//li', function(result){
      els = result.value
       client.assert.equal(els.length, 4)
    });
});