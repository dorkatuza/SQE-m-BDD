import { Then } from '@wdio/cucumber-framework';
import { page } from '../po/index.js';
import { compareText } from './utils/compare-text.js';

Then('Page title should {string} {string}', async function (shouldBeParam, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeParam);
});

Then(/^modal window should( not)? be displayed$/, async param => {
  let assert = expect(page('doctors').addDoctorComponent.rootEl);
  if (param) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
});

// Then(/^Page title should "(:not )? (conatin|be equal to)" "(.*)"$/, function(notArg, shouldBeParam, titleText) {
//   const compareParameter = `${notArg}${shouldBeParam}`;
//   const pageTitle = await browser.getTitle();
//   return compareText(pageTitle, titleText, shouldBeParam, compareParameter);
// });
