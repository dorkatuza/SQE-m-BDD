import { Header } from '../components/index.js';
///index.js

export class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  open() {
    return browser.url(this.url);
  }
}
