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

  transform(value:number | undefined, args?: any): string {
    return `${value}%`;
  }

}
