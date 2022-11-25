import { Patient } from './Patient';
import { VaccinationCenter } from './VaccinationCenter';
/**
 * Informations about reservation.
 *
 * @export
 * @interface Reservation
 */
export interface Reservation {
  /**
   * Date of the reservation?
   *
   * @type {Date}
   * @memberof Reservation
   */
  date?: Date,
  /**
   * Selected center for the reservation?
   *
   * @type {VaccinationCenter}
   * @memberof Reservation
   */
  center?: VaccinationCenter,
  /**
   * Patient informations about the reservation.
   *
   * @type {Patient}
   * @memberof Reservation
   */
  patient? : Patient
}
