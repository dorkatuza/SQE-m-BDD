import { BasePage } from './base.page.js';
import { SideMenu } from '../components/index.js';
//index.js

export class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
  }
}
