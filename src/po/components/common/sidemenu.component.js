import { BaseComponent } from './base.component.js';

export class SideMenu extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('p.name');
  }

  /**
   * @param name {'dashboard' | 'schedule' | 'doctors'}
   */
  item(name) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}
