import { Component, OnInit } from '@angular/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-cerca-studente',
  templateUrl: './cerca-studente.component.html',
  styleUrls: ['./cerca-studente.component.css'],
})
export class CercaStudenteComponent implements OnInit {
  studente: string;
  nomeStudente: string;
  errore: string;
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
  ngOnInit() {}
}
