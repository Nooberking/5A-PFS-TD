import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe in order to add percentages value.
 * @export
 * @class PercentagePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  /**
   * @ignore
   *
   * @param {(number | undefined)} value
   * @param {*} [args]
   * @return {*}  {string}
   * @memberof PercentagePipe
   */
  transform(value:number | undefined, args?: any): string {
    return `${value}%`;
  }

}
