import { Pipe, PipeTransform } from '@angular/core';

/**
 * Replace empty fields by "A renseigner"
 *
 * @export
 * @class ToFillPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'toFill'
})
export class ToFillPipe implements PipeTransform {

  /**
   * @ignore
   *
   * @param {*} value
   * @param {*} [args]
   * @return {*}  {*}
   * @memberof ToFillPipe
   */
  transform(value: any, args?: any): any {
    return !value || value=="" ? "A renseigner" : value;
  }

}
