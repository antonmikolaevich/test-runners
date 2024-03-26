import BaseComponent from '../common/base.component.js';

export default class LoginComponent extends BaseComponent {
  constructor() {
    super('form');
  }

  get userInput() {
    return this.rootEl.$('input[placeholder="Login"]');
  }

  get passwordInput() {
    return this.rootEl.$('input[placeholder="Password"]');
  }

  get loginButton() {
    return this.rootEl.$('button[type="submit"]');
  }

  async login(username, password) {
    await this.userInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}
