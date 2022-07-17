import { Component, Input } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';
import { Studente } from '../shared-class';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl, Validators } from '@angular/forms';
import { firstValueFrom, take } from 'rxjs';
import { GeneraMatricolaService } from './genera-matricola.service';

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
  matricola;
  @Input() arraySezioni: Array<string>;
  nome = new FormControl('', [Validators.required]);
  cognome = new FormControl('', [Validators.required]);
  data = new FormControl('', [Validators.required]);
  sezione = new FormControl('', [Validators.required]);
  compleatato: string;
  constructor(
    private http: StudentiDBserviceService,
    private dialog: MatDialog,
    private generaMatricola: GeneraMatricolaService
  ) {
    this.dataMax = new Date();
  }

  //Una volta inseriti i campi e confermato si apre il dialog per la conferma
  //validator ritorna {errors:true} se trova errori =>!this.daValidare.errors è tutto ok
  //Il dialog si apre con open(), afterClose() è un Observable
  //Studente è in shared-class
  async immatricola(nome, cognome, nascita, sezione) {
    try {
      if (
        !this.nome.errors &&
        !this.cognome.errors &&
        !this.data.errors &&
        !this.sezione.errors
      ) {
        let matricola = await firstValueFrom(
          this.generaMatricola.getMatricola()
        );
        this.newStudente = new Studente(
          nome,
          cognome,
          nascita,
          sezione,
          +matricola
        );
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { studente: this.newStudente };
        const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
        const close = dialogRef
          .afterClosed()
          .pipe(take(1))
          .subscribe((val) => {
            if (val === true) {
              this.http
                .insertStudente(JSON.stringify(this.newStudente))
                .subscribe((val) => {
                  (this.compleatato = val), console.log(val);
                });
            }
          });
      }
    } catch (e) {}
  }
  //La data era in formato YY/MM/DD, toLocaleString() per averla italiana
  //split alla virgola {YY/MM/DD, 00:00:00} per eliminare l'ora
  pickData($event) {
    this.nascita = new Date($event).toLocaleString().split(',', 1).toString();
  }
}
