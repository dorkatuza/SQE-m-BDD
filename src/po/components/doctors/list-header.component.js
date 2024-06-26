import { BaseComponent } from '../common/base.component.js';

export class DoctorListHeader extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('button.e-control');
  }
}
