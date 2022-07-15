import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  form;
  description: string;

  constructor(private dialogRef: MatDialogRef<DialogComponent>) {}

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close(this);
  }
}
