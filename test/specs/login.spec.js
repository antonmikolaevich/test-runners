import LoginPage from '../../page-objects/pages/login.page.js';
import {expect} from 'chai';
import DashboardPage from '../../page-objects/pages/dashboard.page.js';
import {expectedData} from '../../data/constants.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login page', () => {
  before(async () => {
    await loginPage.open();
  });

  it('Validate page url', async () => {
    const pageUrl = await browser.getUrl();
    expect(pageUrl).to.include(loginPage.url, 'Page url is not as expected');
  });

  it('Validate page title', async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal(expectedData.pageTitle, 'Page title is not as expected');
  });

  it('Login successfully to Report Portal', async () => {
    const loginUrl = await browser.getUrl();
    await loginPage.login.login(process.env.WDIO_USERNAME, process.env.WDIO_PASSWORD);
    await browser.waitUntil(async () => {
      const newURL = await browser.getUrl();
      return newURL !== loginUrl;
    }, {
      timeout: 10000,
      timeoutMsg: 'Expected URL to change after 10s',
    });
    const dashboardUrl = await browser.getUrl();
    expect(dashboardUrl).to.include(dashboardPage.url, 'User is not logged in');
  });
});
