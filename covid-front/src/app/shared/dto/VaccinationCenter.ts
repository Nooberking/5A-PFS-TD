/**
 * Informations about the vaccination center.
 *
 * @export
 * @interface VaccinationCenter
 */
export interface VaccinationCenter {
  /**
   *
   * Id of the vaccination center on DB.
   * @type {number}
   * @memberof VaccinationCenter
   */
  id: number,
  /**
   *
   *  Name of the vaccination center.
   * @type {string}
   * @memberof VaccinationCenter
   */
  name: string,
  /**
   * City where is located the vaccination center. If it's in a foreign country, displays the country.
   *
   * @type {string}
   * @memberof VaccinationCenter
   */
  city: string
}
