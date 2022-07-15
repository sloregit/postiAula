import { Component, OnInit, Input } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-aggiungi-studente',
  templateUrl: './aggiungi-studente.component.html',
  styleUrls: ['./aggiungi-studente.component.css'],
})
export class AggiungiStudenteComponent {
  cercaStudenti: boolean;
  cercaSezione: boolean;
  @Input() arraySezioni: Array<string>;
  conf;
  constructor(private http: StudentiDBserviceService) {}
  foo(nome, cognome, anno, sezione) {
    console.log(nome, cognome, anno, sezione);
  }
  foo3($event) {
    let a = new Date($event).toUTCString();
    console.log(typeof a);
    console.log(a);
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
