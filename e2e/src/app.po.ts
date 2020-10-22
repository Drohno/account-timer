import { browser, by, element } from 'protractor';

export class AppPage {
  private credentias = {
    email: 'account@timer.com',
    password: 't3t1ng154fun'
  };

  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="email"]'))
      .element(by.tagName('input'))
      .sendKeys(credentias.email);
    element(by.css('[name="password"]'))
      .element(by.tagName('input'))
      .sendKeys(credentias.password);
    element(by.tagName('app-button')).click();
  }

  logOut() {
    element(by.tagName('app-button')).click();
  }
}
