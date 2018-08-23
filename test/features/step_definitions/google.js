const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

Given(/^I open Google`s search page$/, () => {
  return client
    .url('http://google.com')
    .waitForElementVisible('body', 1000)
})
Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]')
})

When(/^I search for (.*?)$/, (expression) => {
  return client
    .setValue('input[name=q]', expression)
    .submitForm('input[name=q]')
})
Then(/^the search result should contain (.*?)$/, (result) => {
  return client.assert.containsText('body', result)
})