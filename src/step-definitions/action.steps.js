import { When } from '@wdio/cucumber-framework';
import { page } from '../po/index.js';

When('I open {string} page', function (pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function () {
  return page('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function (button) {
  return page('doctors').addDoctorComponent.clickButton(button);
});

When('I wait {int} seconds', function (timeToWaitInSeconds) {
  return browser.pause(timeToWaitInSeconds * 1000);
});

// When(/^I wait (\d+) seconds$/, function(timeToWaitInSeconds) {
//   return browser.pause(timeToWaitInSeconds * 1000);
// });
