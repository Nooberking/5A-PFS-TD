import { Observable } from 'rxjs';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';

export interface UnsavedChanges{
  unsavedChanges(): boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanDesactivateGuard implements CanDeactivate<UnsavedChanges>{

  canDeactivate(component: UnsavedChanges): boolean | Observable<boolean> {
    return component.unsavedChanges();
  }
}
