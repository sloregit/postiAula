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
  constructor(private http: StudentiDBserviceService) {}
  cercaStudente(nomeStudente) {
    this.http.getStudente(nomeStudente).subscribe({
      next: (studente) => {
        let dati = JSON.parse(studente);
        this.studente = 'nome: ' + dati.nome + ' sezione: ' + dati.sezione;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  ngOnInit() {}
}
