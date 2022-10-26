import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFill'
})
export class ToFillPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return !value || value=="" ? "A renseigner" : value;
  }

}
