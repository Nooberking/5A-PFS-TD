import { DialogData } from './../center-details.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-center-details-dialog',
  templateUrl: './center-details-dialog.component.html',
  styleUrls: ['./center-details-dialog.component.css']
})
export class CenterDetailsDialogComponent implements OnInit {
  header: string ='';

  constructor(
    public dialogRef: MatDialogRef<CenterDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
      if (this.data.state =='success') this.header = 'Nice !';
      else this.header = 'Oh....';
  }


  onOkClick(): void {
    this.dialogRef.close();
  }



}
