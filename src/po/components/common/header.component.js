import { BaseComponent } from './base.component.js';

export class Header extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  get logoutBtn() {
    return this.rootEl.$('.logout-container');
  }
}
