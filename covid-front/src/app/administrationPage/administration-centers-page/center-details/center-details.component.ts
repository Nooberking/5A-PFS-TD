import { CenterDetailsDialogComponent } from './center-details-dialog/center-details-dialog.component';
import { Subscription, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VaccinationCenter } from './../../../shared/dto/VaccinationCenter';
import { CenterService } from './../../../shared/services/center.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit, OnDestroy {


  nameFormControl: FormControl = new FormControl('', [Validators.required]);
  cityFormControl: FormControl = new FormControl('', [Validators.required]);

  center!: VaccinationCenter;

  confirmButton: string = 'Ajouter';

  subs: Subscription[] = [];
  constructor(
    private centerService: CenterService,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.subs.push(this.centerService.currentCenter.subscribe(center =>{
      this.center = center;
      this.preLoadCenterInfos();
    }));
  }

  preLoadCenterInfos(){
    if(!this.center.id || this.center.id <= 0){
      this.confirmButton = "Ajouter";
    }
    else {
      this.confirmButton = "Mettre à jour";
      this.nameFormControl.setValue(this.center.name);
      this.cityFormControl.setValue(this.center.city);
    }
  }


  returnSearchMode(){
    this.centerService.changeMode({name:'search'});
  }


  saveCenter(){
    this.updateCenterSelection();
   this.subs.push(this.saveSelectedCenter().subscribe({
    error: err =>{this.openFailedDialog()},
    complete: () =>{ this.openSuccessDialog()}
   }))

  }

  updateCenterSelection(){
    this.center.name = this.nameFormControl.value;
    this.center.city = this.cityFormControl.value;
    this.centerService.modifyCenter(this.center);
  }

  saveSelectedCenter(): Observable<object>{
    if(!this.center.id || this.center.id <= 0) return this.centerService.addSelectedCenter(this.center);
    else return this.centerService.updateSelectedCenter(this.center);
  }

  openFailedDialog(){
    const failedRef = this.dialog.open(CenterDetailsDialogComponent,{
      width: '250px',
      data: {
        state: 'fail',
        message: 'Une erreur est survenue... Veuillez réessayer.'
      }
    });
  }

  openSuccessDialog(){
    const successRef = this.dialog.open(CenterDetailsDialogComponent,{
      width: '250px',
      data: {
        state: 'success',
        message: 'Les modifications ont été enregistrées avec succes !'
      }
    });
    this.subs.push(successRef.afterClosed().subscribe({
      complete: () => this.returnSearchMode()
    }));
  }

  openUsersPage(){
    this.centerService.changeMode({name: 'user-details'});
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}

export interface DialogData{
  state: 'success' | 'fail',
  message: string
}
