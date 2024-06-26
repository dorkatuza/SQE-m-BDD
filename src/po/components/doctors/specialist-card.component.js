import { BaseComponent } from '../common/base.component.js';

export class SpecialistCard extends BaseComponent {
  constructor(id) {
    super(`#Specialist_${id}`);
  }

  get name() {
    return this.rootEl.$('.name');
  }

  get education() {
    return this.rootEl.$('.education');
  }
}
