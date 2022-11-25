import { Observable } from 'rxjs';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';

/**
 * @ignore
 *
 * @export
 * @interface UnsavedChanges
 */
export interface UnsavedChanges{
  unsavedChanges(): boolean | Observable<boolean>;
}

/**
 * Guard to add a specific action when the component is deactivated.
 *
 * @export
 * @class CanDesactivateGuard
 * @implements {CanDeactivate<UnsavedChanges>}
 */
@Injectable({
  providedIn: 'root'
})
export class CanDesactivateGuard implements CanDeactivate<UnsavedChanges>{

  /**
   * Function to apply when the component is deactivated.
   *
   * @param {UnsavedChanges} component
   * @return {*}  {(boolean | Observable<boolean>)}
   * @memberof CanDesactivateGuard
   */
  canDeactivate(component: UnsavedChanges): boolean | Observable<boolean> {
    return component.unsavedChanges();
  }
}
