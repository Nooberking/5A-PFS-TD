/**
 *
 * Informations about the patient.
 * @export
 * @interface Patient
 */
export interface Patient {
  /**
   * Id of the patient on DB.
   * @type {number}
   * @memberof Patient
   */
  id?: number,
  /**
   * First name of the patient.
   *
   * @type {string}
   * @memberof Patient
   */
  firstName: string,
  /**
   * Last name of the patient.
   *
   * @type {string}
   * @memberof Patient
   */
  lastName: string,
  /**
   * Mail address of the patient.
   *
   * @type {string}
   * @memberof Patient
   */
  mail: string,
  /**
   *Phone number of the patient.
   *
   * @type {string}
   * @memberof Patient
   */
  phoneNumber: string

}
