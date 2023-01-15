import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleName'
})
export class RoleNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 'DOCTOR') return 'Médecin';
    else if(value == 'ADMIN') return 'Administrateur';
    else if(value == 'SUPER_ADMIN') return 'Super Administrateur';
    else return value;
  }

}
