import {LoginComponent} from '../components/index.js';
import BasePage from './base.page.js';

export default class LoginPage extends BasePage {
  constructor() {
    super('/#login');
    this.login = new LoginComponent();
  }
}
