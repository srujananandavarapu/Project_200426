import { Given, When, Then } from '@cucumber/cucumber'
import * as openurl from '../testData/url.json'
import { Titles } from '../Constants/Titles';
import { pagefixture } from '../Hooks/SetupTearDown';

Given('I am on the login page', async function () {
  await pagefixture.page.goto(openurl.url)
});

When('I login with valid credentials', async function () {
  const user = openurl.users[0];
  await pagefixture.loginpage?.doLogin("#user-name", user.username)
  await pagefixture.loginpage?.doLogin("#password", user.password)
});



Then('I should see the home page', async function () {
  await pagefixture.homepage?.verifyHomepageTitle(Titles.Homepage)
  await pagefixture.page.close()
});