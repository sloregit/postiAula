import { Component, OnInit, Input } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';
import { Studente } from '../shared-class';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-aggiungi-studente',
  templateUrl: './aggiungi-studente.component.html',
  styleUrls: ['./aggiungi-studente.component.css'],
})
export class AggiungiStudenteComponent {
  cercaStudenti: boolean;
  cercaSezione: boolean;
  dataMax: Date;
  anno: string;
  newStudente: Studente;
  conferma: boolean;
  @Input() arraySezioni: Array<string>;
  conf;
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

    this.dialog.open(DialogComponent, dialogConfig);
  }

  ///////////////
  foo(nome, cognome, nascita, sezione) {
    this.newStudente = new Studente(nome, cognome, nascita, sezione);
    this.conferma = true;
    console.log(this.newStudente);
  }
  indietro() {
    this.conferma = false;
  }
  pickData($event) {
    this.anno = new Date($event).toLocaleString().slice(0, 8);
  }
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
  }
}
