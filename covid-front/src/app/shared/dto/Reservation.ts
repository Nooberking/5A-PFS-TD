import { Patient } from './Patient';
import { VaccinationCenter } from './VaccinationCenter';
export interface Reservation {
  date?: Date,
  center?: VaccinationCenter,
  patient? : Patient
}
