import { Component, OnInit, Input } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';
import { Studente } from '../shared-class';

@Component({
  selector: 'app-cerca-studente',
  templateUrl: './cerca-studente.component.html',
  styleUrls: ['./cerca-studente.component.css'],
})
export class CercaStudenteComponent implements OnInit {
  studente: string;
  nomeStudente: string;
  errore: string;
  @Input() arraySezioni: Array<string>;
  sezioneResponse: Array<Studente>;
  studenti = [];
  constructor(private http: StudentiDBserviceService) {}
  cercaStudente(nomeStudente) {
    this.http.getStudente(nomeStudente).subscribe({
      next: (studente) => {
        console.log(studente);
        try {
          let dati = JSON.parse(studente);
          this.studente =
            'nome: ' +
            dati.nome +
            ' cognome: ' +
            dati.cognome +
            ' nato: ' +
            dati.nascita +
            ' sezione: ' +
            dati.sezione;
        } catch (e) {
          this.errore = e.toString();
        }
      },
      error: (e) => {
        console.error('cercastudente: ' + e.toString());
        this.errore = 'Studente non trovato';
      },
    });
  }

  cercaSezione(sezione) {
    this.studenti = [];
    this.http.getSezione(sezione).subscribe({
      next: (res) => {
        this.sezioneResponse = JSON.parse(res);
        this.sezioneResponse.map((studente) => {
          this.studenti.push(
            new Studente(
              studente.nome,
              studente.sezione,
              studente.nascita,
              studente.sezione
            )
          );
          console.log(this.studenti);
        });
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  ngOnInit() {}
}
