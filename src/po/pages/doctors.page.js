import { BasePage } from './base.page.js';
import { AddDoctorComponent, DoctorListHeader, SpecialistCard } from '../components/index.js';
//index.js

export class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorComponent = new AddDoctorComponent();
    this.doctorListHeader = new DoctorListHeader();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
}