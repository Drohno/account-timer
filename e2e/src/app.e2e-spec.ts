import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('Application main cycle test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to login, fill in credentials and go to timer', () => {
    page.navigateTo();
    page.fillCredentials();
    expect(browser.getCurrentUrl()).toContain('timer');
  });

});
