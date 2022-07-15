import { Component, OnInit } from '@angular/core';
import { Studente } from '../shared-class';
import { StudentiDBserviceService } from '../studenti-dbservice.service';

@Component({
  selector: 'app-aggiungi-classe',
  templateUrl: './aggiungi-classe.component.html',
  styleUrls: ['./aggiungi-classe.component.css'],
})
export class AggiungiClasseComponent implements OnInit {
  panelOpenState = false;
  arrayStudenti: Array<Studente>;
  selezionati: Array<Studente>;
  apriLista: boolean;
  constructor(private http: StudentiDBserviceService) {
    this.arrayStudenti = [];
    this.apriLista = false;
  }
  chiudi() {
    this.apriLista = false;
  }
  foo() {
    this.http.cercaTutti().subscribe((val) => {
      const collection = JSON.parse(val);
      collection.map((studente) => this.arrayStudenti.push(studente));
    });
    this.apriLista = true;
  }
  selezionatiUpdate(list) {
    this.selezionati = list;
  }
  foo3() {
    console.log(this.selezionati);
  }
  ngOnInit() {}
}
