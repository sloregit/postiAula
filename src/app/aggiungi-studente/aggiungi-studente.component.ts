import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';
import { Studente } from '../shared-class';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aggiungi-studente',
  templateUrl: './aggiungi-studente.component.html',
  styleUrls: ['./aggiungi-studente.component.css'],
})
export class AggiungiStudenteComponent {
  cercaStudenti: boolean;
  cercaSezione: boolean;
  dataMax: Date;
  nascita: string;
  newStudente: Studente;
  conferma: boolean;
  @Input() arraySezioni: Array<string>;
  @Output() newStudenteEmitter = new EventEmitter<Studente>();
  nome = new FormControl('', [Validators.required]);
  cognome = new FormControl('', [Validators.required]);
  data = new FormControl('', [Validators.required]);
  sezione = new FormControl('', [Validators.required]);
  constructor(
    private http: StudentiDBserviceService,
    private dialog: MatDialog
  ) {
    this.dataMax = new Date();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.newStudente;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }

  ///////////////
  aggiungiStudente(nome, cognome, nascita, sezione) {
    try {
      if (
        !this.nome.errors &&
        !this.cognome.errors &&
        !this.data.errors &&
        !this.sezione.errors
      ) {
        this.newStudente = new Studente(nome, cognome, nascita, sezione);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { studente: this.newStudente };
        const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => (this.conferma = data));
        if (this.conferma) {
          console.log('OKAggiungi');
        }
      }
    } catch (e) {}
  }

  /////////
  indietro() {
    this.conferma = false;
  }
  pickData($event) {
    this.nascita = new Date($event).toLocaleString().split(',', 1).toString();
    console.log(this.nascita);
  } /*
  aggiungiStudente() {
    let doc = {
      nome: 'Ariel',
      cognome: 'Nettuno',
      sezione: 'F',
      nascita: '22/08/1990',
    };
    this.http.insertStudente(JSON.stringify(doc)).subscribe((val) => {
      (this.conf = val), console.log(val);
    });
  }*/
}
